import uuidGenerator from "./uuidGenerator"

export default taskStructure = (title, priority, category, schedule, attach, location, description) => {
  const taskStructureObj = {
    id: uuidGenerator(),
    title: title,
    priority: priority,
    category: category,
    schedule: schedule,
    attach: attach,
    // description: description,
    // location: location,
  }
  return taskStructureObj
}

