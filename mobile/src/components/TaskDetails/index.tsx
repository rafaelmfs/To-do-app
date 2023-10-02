import { useState } from 'react'
import {
  Modal,
  ModalProps,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { theme } from '../../styles/theme'
import { styles } from './style'

interface TaskDetailsProps extends ModalProps {
  task: {
    title: string
    description: string
  }
  onClose: () => void
}

export function TaskDetails({ task, onClose, ...props }: TaskDetailsProps) {
  const [title, setTitle] = useState<string>(task.title)
  const [description, setDescription] = useState<string>(task.description)

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
              onPress={onClose}
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
