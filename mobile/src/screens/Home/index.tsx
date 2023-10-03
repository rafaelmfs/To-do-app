import { useEffect, useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { Task } from '../../@types/Tasks'
import { Plus } from '../../assets/icons/Plus'
import { Header } from '../../components/Header'
import { TasksList } from '../../components/TasksList'
import { TasksSummary } from '../../components/TasksSummary'
import { getAllTasks } from '../../restApi/tasks'
import { theme } from '../../styles/theme'
import { styles } from './style'

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [concludeCount, setConcludeCount] = useState<number>(0)

  async function loadAllTasks() {
    const tasks = await getAllTasks()

    setTasks(tasks.tasks)
    setConcludeCount(tasks.completed)
  }

  useEffect(() => {
    loadAllTasks()
  }, [])

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.mainContent}>
        <View style={styles.addTaskArea}>
          <TextInput
            style={styles.textInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme.colors.gray_300}
          />

          <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
            <Plus />
          </TouchableOpacity>
        </View>
        <View style={styles.tasksArea}>
          <TasksSummary created={tasks.length} concluded={concludeCount} />
          <TasksList tasks={tasks} />
        </View>
      </View>
    </View>
  )
}
