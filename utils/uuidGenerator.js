export default uuidGenerator = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear().toString()
  const currentMonth = (currentDate.getMonth() + 1).toString()
  const currentDay = currentDate.getDate().toString()
  const currentHour = currentDate.getHours().toString()
  const currentMinutes = currentDate.getMinutes().toString()
  const currentSeconds = currentDate.getSeconds().toString()
  const currentMilliseconds = currentDate.getMilliseconds().toString()
  const MathRandom = Math.random().toString(36)
  const uuid = currentYear + currentMonth + currentDay + currentHour + currentMinutes + currentSeconds + currentMilliseconds + MathRandom
  return uuid
}