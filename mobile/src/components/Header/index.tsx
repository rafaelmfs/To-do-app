import { View } from 'react-native'
import { Logo } from '../Logo/Logo'
import { styles } from './style'

export function Header() {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  )
}
