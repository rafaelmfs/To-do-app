import cors from '@fastify/cors'
import fastify from 'fastify'
import { env } from './env'
import { tasksRoutes } from './routes/tasks'

const app = fastify({ logger: true })

app.register(cors)

app.register(tasksRoutes, {
  prefix: 'tasks',
})

app.listen({
  port: env.PORT,
  host: env.HOST,
})
