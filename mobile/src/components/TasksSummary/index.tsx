import { Text, View } from 'react-native'
import { styles } from './style'

interface TasksSummaryProps {
  created?: number
  concluded?: number
}

export function TasksSummary({
  created = 0,
  concluded = 0,
}: TasksSummaryProps) {
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
        <Text style={styles.countText}>{created}</Text>
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
        <Text style={styles.countText}>{concluded}</Text>
      </View>
    </View>
  )
}
