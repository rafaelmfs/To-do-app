import { Image, Text, View } from 'react-native'
import Clipboard from '../../assets/images/Clipboard.png'
import { styles } from './style'

export function Empty() {
  return (
    <View style={styles.empty}>
      <Image source={Clipboard} alt="Quadro vazio" />
      <View>
        <Text
          style={{
            ...styles.emptyMessage,
            fontWeight: 'bold',
          }}
        >
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.emptyMessage}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}
