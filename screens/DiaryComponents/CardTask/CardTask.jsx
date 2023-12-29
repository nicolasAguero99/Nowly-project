import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { useContext } from 'react'

// Context
import { PendingTaskContext, CompletedTaskContext } from '../../../context/AddTaskContext'

// Global Styles
import { globalColors } from '../../../globalStyles/globalStyles'

// Category Translation
import { categoryTranslation } from '../../../utils/categoryTranslation'

// Icons
import IconSvg from '../../../assets/icons/IconSvg'


const CardTask = ({ id, category, title, priority, schedule, children, attach, location, completed }) => {

  const categoryValue = 'category' + category
  const colorCategory = globalColors[categoryValue]
  const [taskList, setTaskList] = useContext(PendingTaskContext)
  const [taskListCompleted, setTaskListCompleted] = useContext(CompletedTaskContext)

  const handlePressComplete = () => {
    if(!completed) { 
      const taskListFiltered = taskList.filter(card => card.id !== id)
      const taskListFinded = taskList.find(card => card.id === id)
      setTaskList(taskListFiltered)
      setTaskListCompleted([...taskListCompleted, taskListFinded])
    } else { 
      const taskListFiltered = taskListCompleted.filter(card => card.id !== id)
      const taskListFinded = taskListCompleted.find(card => card.id === id)
      setTaskListCompleted(taskListFiltered)
      setTaskList([...taskList, taskListFinded])
    }
  }
    
  return (
    <>
      <TouchableOpacity onPress={handlePressComplete} id={id} style={[styles.task, { borderLeftWidth: 14, borderLeftStyle: 'solid', borderLeftColor: !completed ? colorCategory : globalColors.green, opacity: completed && .6 }]}>
        <View style={styles.containerIconsInfo}>
          <Text style={[styles.category, { color: !completed ? colorCategory : globalColors.green }]}>{categoryTranslation[category]}</Text>
          <IconSvg iconName='flagPriority' width={20} height={20} 
            color={
              completed ? globalColors.green :
              priority === "high" ? (globalColors.highPriority) : 
              priority === "mid" ? (globalColors.midPriority) :
              priority === "low" ? (globalColors.lowPriority) :
              globalColors.noPriority
            } 
          />
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.containerItemInfo}>
          <IconSvg iconName='clockGray' width={20} height={20} />
          <Text style={styles.itemInfo}>{schedule}</Text>
        </View>
        {
          location &&
          <View style={styles.containerItemInfo}>
            <IconSvg iconName='location' width={18} height={18} />
            <Text style={styles.itemInfo}>{location}</Text>
          </View>
        }
          <View style={styles.containerIconsInfo}>
        {
          children &&
          <View style={styles.containerItemInfo}>
            <IconSvg iconName='list' width={20} height={20} />
            <Text style={styles.itemInfo}>...</Text>
          </View>
        }
        {
          attach &&
          <View style={styles.containerAttach}>
          {
            attach &&
            <Image source={{ uri: attach }} style={{ width: 100, height: 100, borderRadius: 10 }} /> 
          }
            <IconSvg style={styles.iconAttach} iconName='clip' width={18} height={18} color={globalColors.secondaryText} />
          </View>
        }
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  task: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 5,
    shadowColor: globalColors.shadowCard,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  category: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 13,
  },
  title: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 15,
  },
  containerItemInfo: {
    flexDirection: 'row',
    gap: 5,
  },
  itemInfo: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 13,
    color: globalColors.secondaryText,
  },
  containerIconsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerAttach: {
    flex: 1,
    alignItems: 'flex-end',
  },

});

export default CardTask