import { StyleSheet, Text, View } from 'react-native';
import IconSvg from '../../assets/icons/IconSvg';

// Global Styles
import { globalColors } from '../../globalStyles/globalStyles';

const SectionCardInfo = () => {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <IconSvg iconName="spotlight" width={30} height={30} />
          <Text style={styles.title}>16 de enero 2023</Text>
          <Text style={styles.paragraph}>¡Yey! Completaste 1 tareas de 8 pendientes.</Text>
        </View>
        <View style={styles.card}>
          <IconSvg iconName="clock" width={30} height={30} />
          <Text style={styles.title}>Temporizador de estudio</Text>
          <Text style={styles.paragraph}>Programá tus tiempos y breaks.</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 5,
    shadowColor: globalColors.shadowCard,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  title: {
    fontFamily: 'SF-Pro-Text-Semibold',
  },
  paragraph: {
    fontFamily: 'SF-Pro-Text-Light',
  },
});

export default SectionCardInfo