import { StyleSheet, Text, View } from 'react-native';

// Global Styles
import { globalColors } from '../../globalStyles/globalStyles';

// Icons
import IconSvg from '../../assets/icons/IconSvg';

const SectionCardInfo = () => {

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Pendientes hoy</Text>
        <View style={styles.containerTasks}>
          <View style={[styles.task, { borderLeftWidth: 14, borderLeftStyle: 'solid', borderLeftColor: globalColors.categorySports }]}>
            <Text style={styles.category}>Deportes</Text>
            <Text style={styles.title}>Hacer ejercicio</Text>
            <View style={styles.containerItemInfo}>
              <IconSvg iconName='clockGray' width={20} height={20} />
              <Text style={styles.itemInfo}>7:30 - 9:00 am</Text>
            </View>
            <View style={styles.containerItemInfo}>
              <IconSvg iconName='list' width={20} height={20} />
              <Text style={styles.itemInfo}>...</Text>
            </View>
          </View>
          <View style={[styles.task, {borderLeftWidth: 14, borderLeftStyle: 'solid', borderLeftColor: globalColors.categoryStudies,}]}>
            <Text style={styles.category}>Estudios</Text>
            <Text style={styles.title}>Examen de biología</Text>
            <View style={styles.containerItemInfo}>
              <IconSvg iconName='clockGray' width={20} height={20} />
              <Text style={styles.itemInfo}>10:15 - 12:15 am</Text>
            </View>
            <View style={styles.containerItemInfo}>
              <IconSvg iconName='list' width={20} height={20} />
              <Text style={styles.itemInfo}>...</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    gap: 20,
  },
  sectionTitle: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 20,
  },
  containerTasks: {
    gap: 10,
  },
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
    color: globalColors.categorySports,
  },
  title: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 15,
    color: globalColors.secondaryText,
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
});

export default SectionCardInfo