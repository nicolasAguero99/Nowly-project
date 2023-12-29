import { ScrollView, View, Dimensions } from 'react-native'
import { useContext } from 'react'

// Components
import Header from './DiaryComponents/Header'
import SectionCardInfo from './DiaryComponents/SectionCardInfo'
import SectionPendingToday from './DiaryComponents/SectionPendingToday'
import SectionCompletedToday from './DiaryComponents/SectionCompletedToday'
import MessageAchievement from './DiaryComponents/MessageArchievement/MessageAchievement'

// Context
import { MessageAchievementContext } from '../context/AddTaskContext'

const Diary = ({ isAddSection }) => {

  const screenHeight = Dimensions.get('window').height;
  const [isMessageVisible] = useContext(MessageAchievementContext)

  return (
    <ScrollView scrollEnabled={!isAddSection ? true : false} style={{ flexDirection: 'column' }}>
      <View style={{ width: '100%', minHeight: screenHeight }}>
      {
        !isAddSection && <MessageAchievement />
      }
      {
        !isMessageVisible &&
        (
          <>
            <Header />
            <SectionCardInfo />
            <SectionPendingToday />
            <SectionCompletedToday />
          </>
        )
      }
      </View>
    </ScrollView>
  )
}

export default Diary