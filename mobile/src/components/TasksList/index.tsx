import { FlatList } from 'react-native'
import { Task } from '../../@types/Tasks'
import { TaskItem } from '../TaskItem'
import { styles } from './style'

interface TaskListProps {
  tasks: Task[]
}

export function TasksList({ tasks }: TaskListProps) {
  return (
    <FlatList
      style={styles.container}
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem
          title={item.name}
          description={item.description}
          completed={!!item.completed}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  )
}
