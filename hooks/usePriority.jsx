import { useState } from 'react'

const usePriority = () => {
  
  const [isPriorityMode, setIsPriorityMode] = useState(false)
  const [priority, setPriority] = useState("no")
  
  const handlePressPriority = () => {
    setIsPriorityMode(false)
  }

  return { isPriorityMode, setIsPriorityMode, priority, setPriority, handlePressPriority }
  
}

export default usePriority