import { FlatList } from 'react-native'
import { TaskItem } from '../TaskItem'
import { styles } from './style'

const tasks = [
  {
    id: '1f9cf395-dcfe-4490-9994-dcecf3ab47f3',
    name: 'Task 2',
    description:
      'Testando a primeira task Testando a primeira task Testando a primeira task Testando a prssssssss',
    completed: 1,
    created_at: '2023-09-30 15:02:51',
    updated_at: null,
  },
  {
    id: '825f429d-84eb-4cdf-abf1-f69fd00dabc9',
    name: 'Task 3',
    description: 'Testando a criação de tasks',
    completed: 0,
    created_at: '2023-09-30 15:03:10',
    updated_at: null,
  },
  {
    id: 'a27b160d-d53b-47c8-881e-65cb10fec574',
    name: 'Task 4',
    description: 'Testando a criação de tasks',
    completed: 0,
    created_at: '2023-09-30 15:03:14',
    updated_at: null,
  },
  {
    id: 'b2a6bbb4-063e-4f47-b580-632884266b5b',
    name: 'Task 5',
    description: 'Testando a criação de tasks',
    completed: 0,
    created_at: '2023-09-30 15:03:17',
    updated_at: null,
  },
  {
    id: '9d49ae5f-c615-4f02-9e6c-ecbaa14f11fd',
    name: 'Task 6',
    description: 'Testando a criação de tasks',
    completed: 0,
    created_at: '2023-09-30 15:03:20',
    updated_at: null,
  },
]

export function TasksList() {
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
