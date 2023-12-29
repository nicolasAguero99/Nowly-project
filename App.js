import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'

// Font
import useCustomFonts from './assets/fonts/useCustomFonts'

// Context
import { AddTaskProvider } from './context/AddTaskContext'

// NavBar
import NavBar from './screens/NavBar'

export default function App() {
  if (!useCustomFonts()) return null

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style="auto" />
      <AddTaskProvider>
        <NavBar />
      </AddTaskProvider>
    </SafeAreaView>
  );
}

