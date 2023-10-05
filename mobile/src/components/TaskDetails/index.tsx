import { useState } from 'react'
import {
  Modal,
  ModalProps,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Task } from '../../@types/Tasks'
import { useTasksContext } from '../../context/Tasks'
import { updateTask } from '../../restApi/tasks'
import { theme } from '../../styles/theme'
import { styles } from './style'

interface TaskDetailsProps extends ModalProps {
  task: {
    title: string
    description: string
    id: string
  }
  onClose: () => void
}

export function TaskDetails({ task, onClose, ...props }: TaskDetailsProps) {
  const [title, setTitle] = useState<string>(task.title)
  const [description, setDescription] = useState<string>(task.description)

  const { tasks, setTasks } = useTasksContext()

  function updateTasksList(updatedTask: Task) {
    const taskUpdatedIndex = tasks.findIndex(
      (lastTasks) => lastTasks.id === updatedTask.id,
    )

    const newTasks = [
      ...tasks.slice(0, taskUpdatedIndex),
      updatedTask,
      ...tasks.slice(taskUpdatedIndex + 1),
    ]

    setTasks(newTasks)
    onClose()
  }

  async function handleUpdateTask() {
    const updatedTitle = task.title !== title
    const updatedDescription = task.description !== description

    if (updatedDescription || updatedTitle) {
      const taskUpdated = await updateTask(
        {
          description,
          name: title,
        },
        task.id,
      )

      updateTasksList(taskUpdated)
    }
  }

  return (
    <Modal transparent {...props}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <TextInput
              value={title}
              onChangeText={setTitle}
              autoCorrect={false}
              editable
              style={styles.titleText}
            />

            <TextInput
              value={description}
              onChangeText={setDescription}
              autoCorrect={false}
              multiline
              style={styles.descriptionText}
            />
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={onClose}
              style={[styles.backButton, styles.actionButton]}
            >
              <Text
                style={{
                  color: theme.colors.gray_100,
                }}
              >
                Voltar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleUpdateTask}
              style={[styles.saveButton, styles.actionButton]}
            >
              <Text
                style={{
                  color: theme.colors.gray_100,
                }}
              >
                Salvar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
