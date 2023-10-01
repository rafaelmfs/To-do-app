import fastify from 'fastify'
import { tasksRoutes } from './routes/tasks'
import cors from '@fastify/cors'

const app = fastify({ logger: true })

app.register(cors)

app.register(tasksRoutes, {
  prefix: 'tasks',
})

app.listen({
  port: 3333,
  host: '192.168.18.100',
})
