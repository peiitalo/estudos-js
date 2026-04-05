const tasks = [];

function getTasks(list, task = "") {
    if (list.length === 0) return "Nenhuma tarefa na lista!"


    if (task === "") {
        return list.map(item => `${item.name}: ${item.description}. (${item.status})`)
    } else {
        return list
            .filter(item => item.name === task)
            .map(item => `${item.name}: ${item.description}. (${item.status})`)
    }
}
