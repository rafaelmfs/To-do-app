import fastify from 'fastify'
import { tasksRoutes } from './routes/tasks'

const app = fastify({ logger: true })

app.register(tasksRoutes, {
  prefix: 'tasks',
})

app.listen({
  port: 3333,
})
