import { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { Check } from '../../assets/icons/Check'
import { Trash } from '../../assets/icons/Trash'
import { useTasksContext } from '../../context/Tasks'
import { deleteTask, makeConcludedTasks } from '../../restApi/tasks'
import { TaskDetails } from '../TaskDetails'
import { styles } from './style'

interface TaskItemProps {
  title: string
  description?: string
  completed: boolean
  id: string
}

function cutString(str: string): string {
  if (str.length > 90) {
    return `${str.substring(0, 87)}...`
  }

  return str
}

export function TaskItem({ title, description, completed, id }: TaskItemProps) {
  const [showTask, setShowTask] = useState<boolean>(false)
  const { tasks, setTasks } = useTasksContext()

  const displayDescription =
    description ?? 'Clique para editar e adicione uma descrição...'

  function handleDeleteTask() {
    deleteTask(id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function showDeleteAlert() {
    Alert.alert('Deseja mesmo exluir ?', '', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Sim',
        onPress: handleDeleteTask,
      },
    ])
  }

  async function handleConcludeTask() {
    const updatedTask = await makeConcludedTasks(id, !completed)

    const newTasksList = tasks.filter(
      (lastTask) => lastTask.id !== updatedTask.id,
    )

    setTasks([updatedTask, ...newTasksList])
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.flexCenter,
            styles.concludeButton,
            completed && styles.concludeButtonCompleted,
          ]}
          onPress={handleConcludeTask}
        >
          {completed && <Check />}
        </TouchableOpacity>
        <View style={styles.content} onTouchStart={() => setShowTask(true)}>
          <Text style={[styles.title, completed && styles.completedText]}>
            {title}
          </Text>
          <Text style={[styles.description, completed && styles.completedText]}>
            {description ? cutString(description) : displayDescription}
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.flexCenter, styles.deleteButton]}
          onPress={showDeleteAlert}
        >
          <Trash />
        </TouchableOpacity>
      </View>

      {showTask && (
        <TaskDetails
          task={{
            description: displayDescription,
            id,
            title,
          }}
          onClose={() => setShowTask(false)}
          visible={showTask}
        />
      )}
    </>
  )
}
