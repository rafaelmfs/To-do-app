import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'
import { randomUUID } from 'node:crypto'
import { requestParamsSchema, validadeId } from '../middleware/validadeId'

const createTasksSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  completed: z.boolean().default(false),
})

const requestBodySchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  completed: z
    .number()
    .optional()
    .transform((value) => {
      if (value !== null && value !== undefined) {
        return !!value
      }
    }),
  updatedAt: z.date().default(new Date()),
})

/** Busca todas as tasks
 *
 * @param req FastifyRequest
 * @param reply FastifyReply
 * @returns
 */
async function getAllTasks(req: FastifyRequest, reply: FastifyReply) {
  const tasks = await knex.select('').from('tasks')

  if (!Array.isArray(tasks)) {
    return reply.status(500)
  }

  return {
    tasks,
  }
}

/** Busca uma task com base no ID informado pela rota
 *
 * @param req FastifyRequest
 * @param reply FastifyReply
 * @returns
 */
async function getTaskById(req: FastifyRequest, reply: FastifyReply) {
  const { id } = requestParamsSchema.parse(req.params)

  try {
    const task = await knex('tasks')
      .select('')
      .where({
        id,
      })
      .first()

    if (task) {
      return reply.status(200).send({
        task,
      })
    }

    return reply.status(404).send({
      message: 'Task não encontrada!',
    })
  } catch (error) {
    return reply.status(500)
  }
}

/** Cria uma nova task
 *
 * @param req FastifyRequest
 * @param reply FastifyReply
 * @returns
 */
async function createNewTask(req: FastifyRequest, reply: FastifyReply) {
  const requestBody = createTasksSchema.safeParse(req.body)

  if (!requestBody.success) {
    return reply.status(404).send({
      error: JSON.stringify(requestBody.error.formErrors.fieldErrors),
    })
  }

  try {
    await knex('tasks').insert({
      id: randomUUID(),
      ...requestBody.data,
    })

    return reply.status(200).send({
      message: 'Task criada com sucesso!',
    })
  } catch (error: any) {
    if (error.code === 'SQLITE_CONSTRAINT') {
      return reply.status(400).send({
        message: 'Já existe uma task com esse nome!',
      })
    }

    return reply.status(500).send({
      message:
        'Ocorreu um erro ao criar a task, verifique os dados e tente novamente.',
    })
  }
}

/** Atualiaz uma task com os dados informados na requisição
 *
 * @param req FastifyRequest
 * @param reply FastifyReply
 * @returns
 */
async function updateTask(req: FastifyRequest, reply: FastifyReply) {
  const requestParamsSchema = z.object({
    id: z.string(),
  })
  const { id } = requestParamsSchema.parse(req.params)

  if (!id) {
    return reply
      .status(404)
      .send({ message: 'Informe o ID da task para atualizar!' })
  }

  const task = await knex('tasks').select().where({ id }).first()

  if (!task) {
    return reply.status(400).send({
      message: 'Task não encontrada!',
    })
  }
  const { name, completed, description, updatedAt } = requestBodySchema.parse(
    req.body,
  )

  try {
    const updatedTask = await knex('tasks')
      .update({
        name: name ?? task.name,
        completed: completed ?? task.completed,
        description: description ?? task.description,
        updated_at: updatedAt.toISOString(),
      })
      .where({
        id,
      })
      .returning('*')

    return reply.status(200).send({
      tasks: updatedTask,
    })
  } catch (error) {
    console.error(error)
    return reply.status(500).send({ message: 'error interno no servidor' })
  }
}

/** Marca uma task informada como concluido baseado no parametro enviado.
 *
 * @param req FastifyRequest
 * @param reply FastifyReply
 * @returns
 */
async function concludeTask(req: FastifyRequest, reply: FastifyReply) {
  const requestParamsSchema = z.object({
    id: z.string(),
  })
  const { id } = requestParamsSchema.parse(req.params)

  if (!id) {
    return reply
      .status(404)
      .send({ message: 'Informe o ID da task para atualizar!' })
  }

  const task = await knex('tasks').select().where({ id }).first()

  if (!task) {
    return reply.status(400).send({
      message: 'Task não encontrada!',
    })
  }

  try {
    const requestBodySchema = z.object({
      completed: z
        .number({
          invalid_type_error: 'informe sempre 0 ou 1',
        })
        .min(0)
        .max(1),
      updatedAt: z.date().default(new Date()),
    })

    const { completed, updatedAt } = requestBodySchema.parse(req.body)

    const updatedTask = await knex('tasks')
      .update({
        completed: !!completed,
        updated_at: updatedAt.toISOString(),
      })
      .where({
        id,
      })
      .returning('*')

    return reply.status(200).send({
      tasks: updatedTask,
    })
  } catch (error) {
    if (error.errors[0].code === 'invalid_type') {
      return reply
        .status(422)
        .send({ message: 'O campo completed deve ser somente 0 ou 1' })
    }
    console.error(error)
    return reply.status(500).send({ message: 'error interno no servidor' })
  }
}

/** Apaga uma task do banco de dados
 *
 * @param req FastifyRequest
 * @param reply FastifyReply
 * @returns
 */
async function deleteTask(req: FastifyRequest, reply: FastifyReply) {
  const requestParamsSchema = z.object({
    id: z.string(),
  })
  const { id } = requestParamsSchema.parse(req.params)

  try {
    const task = await knex('tasks')
      .select('')
      .where({
        id,
      })
      .first()

    if (!task) {
      return reply.status(404).send({ message: 'Task não encontrada!' })
    }

    await knex('tasks').delete().where({
      id,
    })

    return reply.status(204).send({
      message: 'Task excluída com sucesso!',
    })
  } catch (error) {
    return reply.status(500)
  }
}
export async function tasksRoutes(app: FastifyInstance) {
  // ****GET
  app.get('/', getAllTasks)

  app.get(
    '/:id',
    {
      preHandler: [validadeId],
    },
    getTaskById,
  )

  // ****POST
  app.post('/', createNewTask)

  // ****PUT
  app.put(
    '/:id',
    {
      preHandler: [validadeId],
    },
    updateTask,
  )

  // ****PATCH
  app.patch(
    '/conclude/:id',
    {
      preHandler: [validadeId],
    },
    concludeTask,
  )

  // ****DELETE
  app.delete(
    '/:id',
    {
      preHandler: [validadeId],
    },
    deleteTask,
  )
}
