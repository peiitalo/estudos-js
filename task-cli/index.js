const tasks = [];

function viewTasks(list) {
    console.log(list)
}

function addTask(list, task, completed = false) {
  list.push({id: task.length + 1, task, completed });

console.log("Tarefa adicionada!")
}

function removeTask(list, task) {
  let taskToRem = list.find(value => value.task === task)
  
  let newList = list.filter(value => value = taskToRem)
  tasks = newList

  console.log("Tarefa removida!")
}

function toggleCompleted(list, task) {
    let taskToToggle = list.find(value => value.task === task)

    
}
