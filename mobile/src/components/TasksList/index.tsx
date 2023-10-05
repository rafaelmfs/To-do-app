import { FlatList } from 'react-native'
import { useTasksContext } from '../../context/Tasks'
import { TaskItem } from '../TaskItem'
import { styles } from './style'

export function TasksList() {
  const { tasks } = useTasksContext()

  return (
    <FlatList
      style={styles.container}
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem
          id={item.id}
          title={item.name}
          description={item.description}
          completed={!!item.completed}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  )
}
