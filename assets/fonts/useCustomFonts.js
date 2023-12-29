import { useFonts } from 'expo-font'

const useCustomFont = () => {
  const [customFonts] = useFonts({
    "SF-Pro-Text-Light": require("./SF-Pro-Text-Light.otf"),
    "SF-Pro-Text-Regular": require("./SF-Pro-Text-Regular.otf"),
    "SF-Pro-Text-Medium": require("./SF-Pro-Text-Medium.otf"),
    "SF-Pro-Text-Semibold": require("./SF-Pro-Text-Semibold.otf"),
    "SF-Pro-Text-Bold": require("./SF-Pro-Text-Bold.otf"),
  }) 

  return customFonts
}  

export default useCustomFont