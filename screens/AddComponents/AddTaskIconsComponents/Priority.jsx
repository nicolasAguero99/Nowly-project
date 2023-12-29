import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

// Global Styles
import { globalColors } from '../../../globalStyles/globalStyles'

// Icons
import IconSvg from '../../../assets/icons/IconSvg'

// Custom Hook
import usePriority from '../../../hooks/usePriority'

// Priority List
import priorityList from '../../../utils/AddUtils/priorityList'

const Priority = ({ setPriorityParam, priorityParam }) => {

  const { isPriorityMode, setIsPriorityMode, handlePressPriority } = usePriority()

  return (
    <>
      <TouchableOpacity
        onPress={() => { setIsPriorityMode(true) }}
        >
        <IconSvg iconName='flag' width={22} height={22} color={priorityParam === "no" ? globalColors.iconsAddTask : globalColors.primary} />
      </TouchableOpacity>
      {
        isPriorityMode &&
        <View style={styles.containerPriorityList}>
          {priorityList().map(priorityItem => (
            <TouchableOpacity
              key={priorityItem.id}
              onPress={() => {handlePressPriority(priorityItem.value), 
                setPriorityParam(priorityItem.value)
              }}
              style={styles.priority}
            >
              <IconSvg iconName='flagPriority' width={22} height={22} color={globalColors[priorityItem.iconColor]} />
              <Text style={styles.priorityText}>{priorityItem.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  containerPriorityList: {
    backgroundColor: globalColors.white,
    position: 'absolute',
    bottom: 95,
    left: 40,
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    gap: 10,
  }, 
  priority: {
    flexDirection: 'row',
    gap: 8,
  },
  priorityText: {
    fontFamily: 'SF-Pro-Text-Regular',
  },
})

export default Priority