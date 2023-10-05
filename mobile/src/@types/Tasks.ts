export interface Task {
  id: string
  name: string
  description?: string
  completed: boolean
}

export type CreateTaskParams = Omit<Task, 'id' | 'completed'>

export interface UpdateTaskParams extends Omit<Partial<Task>, 'id'> {}
