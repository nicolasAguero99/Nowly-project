import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

// Global Styles
import { globalColors } from '../../../globalStyles/globalStyles'

// Context
import { PendingTaskContext, CompletedTaskContext, MessageAchievementContext } from '../../../context/AddTaskContext'

// Constants
import { TASKS_TO_REACH } from '../../../constants/constants'

const MessageAchievement = () => {

  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height
  const [taskList] = useContext(PendingTaskContext)
  const [completedTasks] = useContext(CompletedTaskContext)
  const navigation = useNavigation()
  const [isMessageVisible, setIsMessageVisible] = useContext(MessageAchievementContext)
  const [hasPressedButton, setHasPressedButton] = useState(false)
  const totalTasks = taskList.length + completedTasks.length
  const isTaskReached = TASKS_TO_REACH.find(num => num === totalTasks)

  useEffect(() => {
    if (isTaskReached) setHasPressedButton(false)
  }, [isTaskReached])

  useEffect(() => {
    if (isTaskReached && !hasPressedButton) setIsMessageVisible(true)
  }, [isTaskReached, hasPressedButton])

  const handlePressNavigateAchievements = () => {
    navigation.navigate('Logros')
    setIsMessageVisible(false)
    setHasPressedButton(true)
  }

  const handlePressNavigateContinue = () => {
    setHasPressedButton(true)
    setIsMessageVisible(false)
  }

  if (!isMessageVisible) {
    return null;
  }
  
  return (
    <View style={[styles.container, { width: screenWidth, height: screenHeight, }]}>
      <Image style={{ width: 165, height: 165 }} resizeMode="contain" source={require('../../../assets/pets/turtle-achievement.png')} alt='grafico' />
      <Text style={styles.title}>¡Felicidades!</Text>
      <Text style={styles.paragraph}>
        Desbloqueaste un nuevo animal por haber creado 10 tareas. Seguí iniciando sesión y completando tareas para desbloquear más avatares.
      </Text>
      <TouchableOpacity onPress={handlePressNavigateAchievements} style={styles.achievementsBtn}><Text style={styles.achievementsBtnText}>Ver mis logros</Text></TouchableOpacity>
      <TouchableWithoutFeedback onPress={handlePressNavigateContinue} style={styles.continueBtn}><Text style={styles.continueBtnText}>Continuar</Text></TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: globalColors.bckgMsgAch,
    zIndex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 34,
  },
  title: {
    fontFamily: 'SF-Pro-Text-Semibold',
    marginTop: 10,
    fontSize: 32,
    color: globalColors.white,
  },
  paragraph: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 17,
    textAlign: 'center',
    color: globalColors.white,
  },
  achievementsBtn: {
    width: '100%',
    paddingVertical: 10,
    marginTop: 60,
    marginBottom: 8,
    backgroundColor: globalColors.bckgBtnMsgAch,
    color: globalColors.white,
    borderRadius: 10,
  },
  achievementsBtnText: {
    textAlign: 'center',
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 17,
    color: globalColors.white,
  },
  continueBtn: {
    width: '100%',
    paddingVertical: 10,
    color: globalColors.white,
  },
  continueBtnText: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 15,
    color: globalColors.white,
  },
});

export default MessageAchievement