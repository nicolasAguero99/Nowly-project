import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'

// Global Styles
import { globalColors } from '../../globalStyles/globalStyles';

// Icons
import IconSvg from '../../assets/icons/IconSvg';

const Header = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Agenda</Text>
          <View style={styles.headerActions}>
            <IconSvg iconName="calendar" width={28} height={28} color={globalColors.primary} />
            <IconSvg iconName="profile" width={28} height={28} />
          </View>
        </View>
        <Text style={styles.headerSubtitle}>Organiza tus tiempos.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    gap: 10,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 32,
    fontFamily: 'SF-Pro-Text-Semibold',
    color: globalColors.primary,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  headerSubtitle: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
  },
});

export default Header