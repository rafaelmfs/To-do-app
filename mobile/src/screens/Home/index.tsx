import { useCallback, useEffect, useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { Plus } from '../../assets/icons/Plus'
import { Header } from '../../components/Header'
import { TasksList } from '../../components/TasksList'
import { TasksSummary } from '../../components/TasksSummary'
import { useTasksContext } from '../../context/Tasks'
import { createTask, getAllTasks } from '../../restApi/tasks'
import { theme } from '../../styles/theme'
import { styles } from './style'

export function Home() {
  const { setTasks, setConcludedCount } = useTasksContext()
  const [title, setTitle] = useState<string>('')

  const loadAllTasks = useCallback(
    async function () {
      const tasks = await getAllTasks()

      setTasks(tasks.tasks)
      setConcludedCount(tasks.completed)
    },
    [setConcludedCount, setTasks],
  )

  async function handleCreateTask() {
    if (title) {
      await createTask({
        name: title,
      })

      loadAllTasks()
    }
  }

  useEffect(() => {
    loadAllTasks()
  }, [loadAllTasks])

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContent}>
        <View style={styles.addTaskArea}>
          <TextInput
            style={styles.textInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme.colors.gray_300}
            value={title}
            onChangeText={setTitle}
          />

          <TouchableOpacity
            style={styles.addButton}
            activeOpacity={0.7}
            onPress={handleCreateTask}
          >
            <Plus />
          </TouchableOpacity>
        </View>
        <View style={styles.tasksArea}>
          <TasksSummary />
          <TasksList />
        </View>
      </View>
    </View>
  )
}
