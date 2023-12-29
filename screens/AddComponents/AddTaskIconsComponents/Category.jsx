import { TouchableOpacity, Text, StyleSheet } from 'react-native'

// Global Styles
import { globalColors } from '../../../globalStyles/globalStyles'

// Icons
import IconSvg from '../../../assets/icons/IconSvg'

export const Category = ({ category, setIsCategoryMode }) => {

  return (
    <TouchableOpacity
      onPress={() => { setIsCategoryMode(true) }}
    >
      <IconSvg iconName='searchCategory' width={22} height={22} color={category === "Tasks" ? globalColors.iconsAddTask : globalColors.primary} />
    </TouchableOpacity>
  ) 
}

export const CategoryItem = ({ categoryItem, handlePressCategory }) => {

  return (
    <TouchableOpacity
      key={categoryItem.id}
      onPress={() => handlePressCategory(categoryItem.value)}
      style={styles.category}
    >
      <Text style={styles.categoryText}>{categoryItem.label}</Text>
    </TouchableOpacity>
  ) 
}

const styles = StyleSheet.create({

  categoryText: {
    fontFamily: 'SF-Pro-Text-Regular',
    paddingVertical: 6,
  },

})
