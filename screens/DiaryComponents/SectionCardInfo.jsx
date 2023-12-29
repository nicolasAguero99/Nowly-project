import { StyleSheet, Text, View } from 'react-native';
import IconSvg from '../../assets/icons/IconSvg';

// Global Styles
import { globalColors } from '../../globalStyles/globalStyles';

// Constants
import { MONTH_NAMES } from '../../constants/constants';


const SectionCardInfo = () => {
  const CURRENT_DATE = new Date() 
  const DAY = CURRENT_DATE.getDate() 
  const MONTH = MONTH_NAMES[CURRENT_DATE.getMonth()] 
  const YEAR = CURRENT_DATE.getFullYear() 

  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.containerInfo}>
            <Text style={styles.title}>{`${DAY} de ${MONTH} ${YEAR}`}</Text>
            <IconSvg iconName="spotlight" width={30} height={30} />
          </View>
            <Text style={styles.paragraph}>¡Yey! Completaste 1 tareas de 8 pendientes.</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: globalColors.shadowCard,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    fontFamily: 'SF-Pro-Text-Semibold',
  },
  paragraph: {
    fontFamily: 'SF-Pro-Text-Light',
  },
});

export default SectionCardInfo