import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react'

// Context
import { PendingTaskContext } from '../../context/AddTaskContext'

// Components
import CardTask from './CardTask/CardTask'

const SectionCardInfo = () => {

  const [taskList] = useContext(PendingTaskContext)

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Pendientes hoy</Text>
        <View style={styles.containerTasks}>
          {taskList.map(task => 
            <CardTask 
              key={task.id}
              id={task.id}
              category={task.category.toString()} 
              title={task.title} 
              schedule={`${task.schedule[0]} - ${task.schedule[1]}`} 
              priority={task.priority}
              attach={task.attach}
            >
              fgggggg
            </CardTask>
          )}
          <Text>---------------</Text>
          <CardTask category='Sports' title='Hacer ejercicio' schedule='7:30 - 9:00 am' priority={"high"}>
            fgggggg
          </CardTask>
          <CardTask category='Studies' title='Examen de biología' schedule='10:15 - 12:15 am' priority={"low"}>
            fgggggg
          </CardTask>
          <CardTask category='Birthday' title='Cumple de Rachel' schedule='15:00 - 19:00 pm' priority={"mid"}/>
          <CardTask category='Welfare' title='Meditar' schedule='22:00 - 22:30 pm' priority={"no"} />
          <CardTask category='Welfare' title='Rutina de Skincare' schedule='22:40 - 23:00 pm' location='Av. San Martín 2040' />
          <CardTask category='Sports' title='Salir a jugar' schedule='12:00 - 13:00 pm' location='Av. San Juan 2040' >
            faff
          </CardTask>
          <CardTask category='Studies' title='Leer la biblia'>
            lollolol
          </CardTask>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    gap: 20,
  },
  sectionTitle: {
    fontFamily: 'SF-Pro-Text-Medium',
    fontSize: 20,
  },
  containerTasks: {
    gap: 10,
  },
});

export default SectionCardInfo