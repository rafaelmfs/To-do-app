import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { useFonts } from 'expo-font'
import { StatusBar } from 'react-native'
import { Home } from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return <></>
  }

  return (
    <>
      <Home />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  )
}
