import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const SectionProductivity = () => {

  const screenWidth = Dimensions.get('window').width;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Productividad</Text>
        <Image style={{ width: screenWidth - 60, height: 200 }}
        resizeMode="contain" source={require('../../assets/grafico.png')} alt='grafico' />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 20,
  },
});

export default SectionProductivity