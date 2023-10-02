import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Check } from '../../assets/icons/Check'
import { Trash } from '../../assets/icons/Trash'
import { TaskDetails } from '../TaskDetails'
import { styles } from './style'

interface TaskItemProps {
  title: string
  description?: string
  completed: boolean
}

function cutString(str: string): string {
  if (str.length > 90) {
    return `${str.substring(0, 87)}...`
  }

  return str
}

export function TaskItem({ title, description, completed }: TaskItemProps) {
  const [showTask, setShowTask] = useState<boolean>(false)

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.flexCenter,
            styles.concludeButton,
            completed && styles.concludeButtonCompleted,
          ]}
        >
          {completed && <Check />}
        </TouchableOpacity>
        <View style={styles.content} onTouchStart={() => setShowTask(true)}>
          <Text style={[styles.title, completed && styles.completedText]}>
            {title}
          </Text>
          <Text style={[styles.description, completed && styles.completedText]}>
            {cutString(description)}
          </Text>
        </View>
        <TouchableOpacity style={[styles.flexCenter, styles.deleteButton]}>
          <Trash />
        </TouchableOpacity>
      </View>

      {showTask && (
        <TaskDetails
          task={{
            title,
            description,
          }}
          onClose={() => setShowTask(false)}
          visible={showTask}
        />
      )}
    </>
  )
}
