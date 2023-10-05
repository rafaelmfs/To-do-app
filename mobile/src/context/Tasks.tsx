import { ReactNode, createContext, useContext, useMemo, useState } from 'react'
import { Task } from '../@types/Tasks'

interface TasksContextSchema {
  tasks: Task[]
  createdCount: number
  concludedCount: number
  setConcludedCount: (count: number) => void
  setTasks: (tasks: Task[]) => void
}

const TasksContext = createContext({} as TasksContextSchema)

export function TasksContextProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [concluded, setConcluded] = useState<number>(0)

  const contextSchema = useMemo(
    () => ({
      tasks,
      concludedCount: concluded,
      createdCount: tasks.length,
      setConcludedCount: setConcluded,
      setTasks,
    }),
    [concluded, tasks],
  )

  return (
    <TasksContext.Provider value={contextSchema}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasksContext() {
  const context = useContext(TasksContext)

  return context
}
