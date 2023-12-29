export default priorityList = () => {
  const priorityListObj = [
    {
      id: 1,
      icon: 'flagPriority',
      iconColor: 'highPriority',
      label: 'Prioridad alta',
      value: 'high',
    },
    {
      id: 2,
      icon: 'flagPriority',
      iconColor: 'midPriority',
      label: 'Prioridad media',
      value: 'mid',
    },
    {
      id: 3,
      icon: 'flagPriority',
      iconColor: 'lowPriority',
      label: 'Prioridad baja',
      value: 'low',
    },
    {
      id: 4,
      icon: 'flagPriority',
      iconColor: 'noPriority',
      label: 'Sin prioridad',
      value: 'no',
    },
  ]
  return priorityListObj
}