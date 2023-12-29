import { View, TextInput, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useContext, useEffect, useState } from 'react'

// Category List
import categoryList from '../../utils/AddUtils/categoryList'

// Component
import Schedule from './AddTaskIconsComponents/Schedule'
import Priority from './AddTaskIconsComponents/Priority'
import {Category, CategoryItem} from './AddTaskIconsComponents/Category'
import {Attach, AttachImage} from './AddTaskIconsComponents/Attach'

// Task Structure
import taskStructure from '../../utils/taskStructure' 

// Custom Hook
import useSchedule from '../../hooks/useSchedule'
import usePriority from '../../hooks/usePriority'
import useCategory from '../../hooks/useCategory'
import useAttach from '../../hooks/useAttach'

// Context
import { PendingTaskContext } from '../../context/AddTaskContext'

// Global Styles
import { globalColors } from '../../globalStyles/globalStyles'

// Icons
import IconSvg from '../../assets/icons/IconSvg'

const AddTaskField = () => {

  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height
  const navigation = useNavigation()
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const [title, setTitle] = useState('')
  const [taskList, setTaskList] = useContext(PendingTaskContext)
  const { schedule, setSchedule, orderSchedule, setOrderSchedule, handleConfirm, handleConfirmSecond, handleCancel } = useSchedule()
  const { priority, setPriority } = usePriority()
  const { category, setCategory, isCategoryMode, setIsCategoryMode, handlePressCategory } = useCategory()
  const { attach, setAttach, handlePressAttach } = useAttach()


  useEffect(() => {
    setIsButtonDisabled(title.trim() === '' || schedule === '')

    console.log('title', title)

  }, [title, schedule])

  const handlePressSubmit = () => {
    if (schedule === '') { setOrderSchedule(1) } 
    if(isButtonDisabled) {return} 

    setTaskList([taskStructure(title, priority, category, schedule, attach), ...taskList])
    setTitle('')
    setSchedule('')
    setPriority('no')
    setCategory('Tasks')
    setAttach('')
    navigation.navigate('Agenda')
  }

  return (
    <>
    <View>
      <View style={styles.container}>
        {attach && <AttachImage attach={attach} />}
        <TextInput
          style={styles.inputTask}
          placeholder="¿Qué estás pensando?"
          autoFocus
          autoCapitalize='sentences'
          value={title}
          editable={true}
          onChangeText={(text) => setTitle(text)}
        />
        <View style={styles.containerActions}>
          <View style={styles.containerIcons}>         
            <Schedule schedule={schedule} orderSchedule={orderSchedule} setOrderSchedule={setOrderSchedule} handleConfirm={handleConfirm} handleConfirmSecond={handleConfirmSecond} handleCancel={handleCancel} />
            <Priority setPriorityParam={setPriority} priorityParam={priority} />
            <Category category={category} setIsCategoryMode={setIsCategoryMode} />
            <Attach attach={attach} handlePressAttach={handlePressAttach} />
          </View>
          <TouchableOpacity 
            style={[styles.buttonSubmit, { opacity: isButtonDisabled &&  .5}]}
            onPress={handlePressSubmit}
            // disabled={isButtonDisabled}
          >
            <IconSvg iconName='send' width={20} height={20} color={globalColors.white} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity 
        style={[styles.bckgBehind, { width: screenWidth, height: screenHeight }]}
        onPress={() => navigation.navigate('Agenda')}
      ></TouchableOpacity>
    </View>
      {
        isCategoryMode &&
        <FlatList
          showsVerticalScrollIndicator={true}
          data={categoryList()}
          renderItem={({ item }) => <CategoryItem categoryItem={item} handlePressCategory={handlePressCategory} />}
          keyExtractor={(categoryItem) => categoryItem.id.toString()}
          style={styles.containerCategoryList}
        />
      }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: globalColors.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    gap: 5,
    zIndex: 12,
  },
  inputTask: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 15, 
  },
  containerActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  containerIcons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 15,
  },
  buttonSubmit: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.primary,
    width: 40,
    height: 40,
    padding: 5,
    borderRadius: 50,
  },
  bckgBehind: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
    opacity: 0.2,
    zIndex: 10,
  },
  containerCategoryList: {
    backgroundColor: globalColors.white,
    position: 'absolute',
    bottom: 120,
    left: 96,
    width: 150,
    height: 145,
    paddingTop: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    zIndex: 93,
  },
});

export default AddTaskField