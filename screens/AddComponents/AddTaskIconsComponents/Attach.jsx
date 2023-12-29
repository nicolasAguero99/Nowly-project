import { TouchableOpacity, Text, Image } from 'react-native'

// Global Styles
import { globalColors } from '../../../globalStyles/globalStyles'

// Icons
import IconSvg from '../../../assets/icons/IconSvg'

export const Attach = ({ attach, handlePressAttach }) => {

  return (
    <>
      <TouchableOpacity
        onPress={handlePressAttach}
      >
        <IconSvg iconName='clip' width={20} height={20} color={attach === '' ? globalColors.iconsAddTask : globalColors.primary} />
      </TouchableOpacity>
    </>
  )
}

export const AttachImage = ({ attach }) => {

  return (
    <>
      { attach && <Image source={{ uri: attach }} style={{ width: 100, height: 100, borderRadius: 10 }} />}
    </>
  )
}