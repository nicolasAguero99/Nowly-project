import { useState } from 'react'

const useSchedule = () => {

  const [schedule, setSchedule] = useState('')
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [orderSchedule, setOrderSchedule] = useState(0)

  const handleCancel = () => {
    setOrderSchedule(0)
    setSchedule('')
  }

  const handleConfirm = (date) => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const time = `${hours}:${minutes}`
    console.log(time)
    setSchedule([...schedule, time])
    setIsConfirmed(true)
    setOrderSchedule(2)
  }

  const handleConfirmSecond = (date) => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const time = `${hours}:${minutes}`
    console.log(time)
    setSchedule([...schedule, time])
    setIsConfirmed(true)
    setOrderSchedule(0)
  }

  return { schedule, isConfirmed, orderSchedule, setSchedule, setOrderSchedule, handleCancel, handleConfirm, handleConfirmSecond }
} 

export default useSchedule
