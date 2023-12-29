import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import { globalColors } from '../globalStyles/globalStyles'

// Components
import Header from './DiaryComponents/Header'
import SectionCardInfo from './DiaryComponents/SectionCardInfo'
import SectionPendingToday from './DiaryComponents/SectionPendingToday'

import categoryList from '../utils/AddUtils/categoryList'

const Welfare = () => {

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.containerCategoryList}>
        {categoryList().map(categoryItem => (
          <TouchableOpacity
            key={categoryItem.id}
            onPress={() => handlePressCategory(categoryItem.value)}
            style={styles.category}
          >
            <Text style={styles.categoryText}>{categoryItem.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <SectionCardInfo />
      {/* <SectionPendingToday /> */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: globalColors.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    gap: 5,
    zIndex: 12,
    flex: 1
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
    bottom: 95,
    left: 76,
    width: 160,
    height: 140,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    gap: 10,
  },
});


export default Welfare

StyleSheet