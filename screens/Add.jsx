import { View } from 'react-native';

// Components
import Diary from './Diary';
import AddTaskField from './AddComponents/AddTaskField';

const Add = () => {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <Diary isAddSection={true} />
      </View>
      <AddTaskField />
    </View>
  )
}

export default Add