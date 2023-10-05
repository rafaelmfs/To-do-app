import { Text, View } from 'react-native'
import { useTasksContext } from '../../context/Tasks'
import { styles } from './style'

export function TasksSummary() {
  const { concludedCount, createdCount } = useTasksContext()

  return (
    <View style={styles.container}>
      <View style={styles.summaryItem}>
        <Text
          style={{
            ...styles.summaryText,
            ...styles.create,
          }}
        >
          Criadas
        </Text>
        <Text style={styles.countText}>{createdCount}</Text>
      </View>

      <View style={styles.summaryItem}>
        <Text
          style={{
            ...styles.summaryText,
            ...styles.conclude,
          }}
        >
          Concluidas
        </Text>
        <Text style={styles.countText}>{concludedCount}</Text>
      </View>
    </View>
  )
}
