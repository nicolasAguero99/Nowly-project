import { useState } from 'react'

const useCategory = () => {
  const [category, setCategory] = useState('Tasks')
  const [isCategoryMode, setIsCategoryMode] = useState(false)
  
  const handlePressCategory = (paramValue) => {
    setIsCategoryMode(false)
    setCategory(paramValue)
  }

  return { category, setCategory, isCategoryMode, setIsCategoryMode, handlePressCategory }
}

export default useCategory