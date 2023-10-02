import { TextInput, TouchableOpacity, View } from 'react-native'
import { Plus } from '../../assets/icons/Plus'
import { Header } from '../../components/Header'
import { TasksList } from '../../components/TasksList'
import { TasksSummary } from '../../components/TasksSummary'
import { theme } from '../../styles/theme'
import { styles } from './style'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.mainContent}>
        <View style={styles.addTaskArea}>
          <TextInput
            style={styles.textInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme.colors.gray_300}
          />

          <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
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
