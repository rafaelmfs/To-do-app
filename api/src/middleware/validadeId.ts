import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const requestParamsSchema = z.object({
  id: z.string(),
})

export async function validadeId(req: FastifyRequest, reply: FastifyReply) {
  const { id } = requestParamsSchema.parse(req.params)

  if (!id) {
    return reply.status(400).send({
      message: 'Informe um ID.',
    })
  }
}
