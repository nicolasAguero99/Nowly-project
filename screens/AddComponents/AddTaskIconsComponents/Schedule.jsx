import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

// Global Styles
import { globalColors } from '../../../globalStyles/globalStyles'

// Icons
import IconSvg from '../../../assets/icons/IconSvg'

const Schedule = ({ schedule, handleConfirm, handleConfirmSecond, setOrderSchedule, orderSchedule, handleCancel }) => {

  return (
    <>
      <TouchableOpacity
        onPress={() => setOrderSchedule(1)}
      >
        <IconSvg iconName='calendar' width={22} height={22} color={schedule === '' ? globalColors.iconsAddTask : globalColors.primary} />
      </TouchableOpacity>
      {
        orderSchedule === 1 ?
          (<Text style={styles.scheduleTextInfo}>Desde que hora</Text>)
        :
        orderSchedule === 2 ?
          (<Text style={styles.scheduleTextInfo}>Hasta que hora</Text>)
        : null
      }

      <DateTimePickerModal
        isVisible={orderSchedule === 1}
        mode="time"
        display="clock"
        is24Hour={false}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

      <DateTimePickerModal
        isVisible={orderSchedule === 2}
        mode="time"
        display="clock"
        is24Hour={false}
        onConfirm={handleConfirmSecond}
        onCancel={handleCancel}
      />
    </>
  )
}

const styles = StyleSheet.create({
  scheduleTextInfo: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 12,
  },
})

export default Schedule