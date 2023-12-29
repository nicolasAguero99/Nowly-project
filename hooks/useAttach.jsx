import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

const useAttach = () => {

  const [attach, setAttach] = useState('')

  const handlePressAttach = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    })

    if (!result.canceled) {
      setAttach(result.assets[0].uri)
    }
  }

  return { attach, setAttach, handlePressAttach }

}

export default useAttach