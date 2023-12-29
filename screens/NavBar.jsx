import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { useContext } from 'react'

// Global Styles
import { globalColors } from '../globalStyles/globalStyles'

// Icons
import IconSvg from '../assets/icons/IconSvg'

// Context
import { MessageAchievementContext } from '../context/AddTaskContext'

// Screens
import Home from './Home'
import Diary from './Diary'
import Add from './Add'
import Welfare from './Welfare'

// const HomeStack = createNativeStackNavigator()
// const Stack = () => {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen 
//         name='Home'
//         component={Home}
//         options={{ headerShown: false }}
//       />
//     </HomeStack.Navigator>
//   )
// }

const Tab = createBottomTabNavigator()

const Tabs = () => {

  const [isMessageVisible] = useContext(MessageAchievementContext)

  return (
    <Tab.Navigator
      initialRouteName='Home' screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        headerShown: false,
        tabBarStyle: { paddingVertical: 20, display: isMessageVisible ? 'none' : 'flex' }
      }}>
      <Tab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <IconSvg iconName='home' colorNavBar={color} />
            ),
            headerShown: false,
          tabBarLabelStyle: { fontSize: 12, fontFamily: 'SF-Pro-Text-Regular', paddingTop: 12 },
        }}
      />
      <Tab.Screen 
        name='Agenda' 
        component={Diary}
        options={{
          tabBarIcon: ({color}) => (
            <IconSvg iconName='diary' colorNavBar={color} />
          ),
          tabBarLabelStyle: { fontSize: 12, fontFamily: 'SF-Pro-Text-Regular', paddingTop: 12 },
        }}
      />
      <Tab.Screen 
        name=' ' 
        component={Add}
        options={{
          tabBarIcon: () => (
            <IconSvg iconName='add' />
          ),
          tabBarLabelStyle: { fontSize: 12, fontFamily: 'SF-Pro-Text-Regular', paddingTop: 34 },
        }}
      />
      <Tab.Screen 
        name='Bienestar' 
        component={Welfare}
        options={{
          tabBarIcon: ({color}) => (
            <IconSvg iconName='dotGroup' colorNavBar={color} />
          ),
          tabBarLabelStyle: { fontSize: 12, fontFamily: 'SF-Pro-Text-Regular', paddingTop: 12 },
        }}
      />
      <Tab.Screen 
        name='Logros' 
        component={Diary}
        options={{
          tabBarIcon: ({color}) => (
            <IconSvg iconName='crown' colorNavBar={color} />
          ),
          tabBarLabelStyle: { fontSize: 12, fontFamily: 'SF-Pro-Text-Regular', paddingTop: 12 },
        }}
      />
    </Tab.Navigator>
  )
}

export default NavBar = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}