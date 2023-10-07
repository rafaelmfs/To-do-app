import { CreateTaskParams, Task, UpdateTaskParams } from '../@types/Tasks'
import { api } from '../api/axios'

export async function getAllTasks() {
  try {
    const response = await api.get('/tasks')
    const { data: tasks } = response

    return tasks
  } catch (error) {
    console.error(error)
  }
}

export async function getDetailedTask(id: string) {
  try {
    const response = await api.get<Task>(`/tasks/${id}`)
    const { data: task } = response

    return task
  } catch (error) {
    console.error(error)
  }
}

export async function createTask(data: CreateTaskParams) {
  try {
    const response = await api.post('/tasks', data)

    return response.status === 200
  } catch (error) {
    console.error(error)
  }
}

export async function updateTask(data: UpdateTaskParams, id: string) {
  try {
    const response = await api.put(`/tasks/${id}`, data)

    return response.data.task
  } catch (error) {
    console.error(error)
  }
}

export async function makeConcludedTasks(id: string, concluded: boolean) {
  try {
    const response = await api.patch(`tasks/conclude/${id}`, {
      completed: concluded ? 1 : 0,
    })

    return response.data.task
  } catch (error) {
    console.error(error)
  }
}

export async function deleteTask(id: string) {
  try {
    await api.delete(`/tasks/${id}`)
  } catch (error) {
    console.log(JSON.stringify(error))
  }
}
