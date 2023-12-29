import { createContext, useState } from 'react'

export const PendingTaskContext = createContext()
export const CompletedTaskContext = createContext()
export const MessageAchievementContext = createContext()

export const AddTaskProvider = ({ children }) => {
  const [pendingTasks, setPendingTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [isMessageVisible, setIsMessageVisible] = useState(false)

  return (
    <PendingTaskContext.Provider value={[pendingTasks, setPendingTasks]}>
      <CompletedTaskContext.Provider value={[completedTasks, setCompletedTasks]}>
        <MessageAchievementContext.Provider value={[isMessageVisible, setIsMessageVisible]}>
        {children}
        </MessageAchievementContext.Provider>
      </CompletedTaskContext.Provider>
    </PendingTaskContext.Provider>
  );
};
