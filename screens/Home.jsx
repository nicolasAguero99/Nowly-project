import { ScrollView } from 'react-native';

// Components
import Header from './HomeComponents/Header';
import SectionCardInfo from './HomeComponents/SectionCardInfo';
import SectionPendingToday from './HomeComponents/SectionPendingToday';
import SectionProductivity from './HomeComponents/SectionProductivity';

const Home = () => {

  return (
    <ScrollView style={{flexDirection: 'column'}}>
      <Header />
      <SectionCardInfo />
      <SectionPendingToday />
      <SectionProductivity />
    </ScrollView>
  )
}

export default Home