const readline = require("readline-sync")

const tasks = [];
let runing = true

function getTasks(list, task = "") {
    if (list.length === 0) return "Nenhuma tarefa na lista!"

    if (task.toUpperCase() === "") {
        return list.map(item => `${item.name}: ${item.description}. (${item.status ? "✔️" : "✖️"})`)
    } else {
        return list
            .filter(item => item.name === task.toUpperCase())
            .map(item => `${item.name}: ${item.description}. (${item.status ? "✔️" : "✖️"})`)
    }
}

function addTask(list, name, desc) {
    const newTask = {
        id: Date.now(),
        name: name.toUpperCase(),
        description: desc,
        status: false
    };

    list.push(newTask);
    return "Tarefa criada com sucesso!"
}

function updTask(list, task) {
    let itemToUpd = list.find(item => item.name === task.toUpperCase());

    if (itemToUpd === undefined) {
        return "Tarefa não encontrada!"
    }

    let prop = readline.question("Qual propriedade você quer atualizar? (NOME | DESCRIÇÃO) ");

    if (prop.toUpperCase() === "NOME") {
        itemToUpd.name = readline.question("Qual vai ser o novo valor da propriedade? ");
        return "O nome da tarefa foi atualizado!";
    } else if (prop.toUpperCase() === "DESCRICAO" || prop.toUpperCase() === "DESCRIÇÃO") {
        itemToUpd.description = readline.question("Qual vai ser o novo valor da propriedade? ");
        return "A descrição da tarefa foi atualizada!";
    } else {
        return "Não foi possível identificar a propriedade da tarefa!"
    }
}

function delTask(list, task) {
    let taskToDel = list.findIndex(item => item.name === task.toUpperCase())

    if (taskToDel !== -1) {
        list.splice(taskToDel, 1);
        return `${task} foi removida!`
    } else {
        return "Nenhuma tarefa foi encontrada!"
    }
}

function toggleStatus(list, task) {
    let taskToToggle = list.find(item => item.name === task.toUpperCase());

    if (taskToToggle !== undefined) {
        taskToToggle.status = !taskToToggle.status;

        return taskToToggle.status ? `${task} foi marcada como concluída!` : `${task} foi marcada como não concluída!`;
    } else return "Tarefa não encontrada!";
}

while (runing) {
    console.log(`--- MENU PRINCIPAL ---
                [1] Ver Tarefas
                [2] Nova Tarefa
                [3] Atualizar Tarefa
                [4] Remover
                [5] Marca/Desmarca tarefa como concluída
                [6] Sair
                ----------------------`);
    let action = Number(readline.question("O que você gostaria de fazer agora? "));

    switch (action) {
        case 1:
            let taskToView = readline.question("Qual tarefa você quer ver? (Caso queira ver todas apenas aperte ENTER) ");
            console.log(getTasks(tasks, taskToView));
            break;
        case 2:
            let taskName = readline.question("Dê um nome para a sua tarefa: ");
            let taskDesc = readline.question("Qual a descrição da sua tarefa? ");
            console.log(addTask(tasks, taskName, taskDesc));
            break;
        case 3:
            let taskToUpd = readline.question("Qual tarefa você quer atualizar? ");
            console.log(updTask(tasks, taskToUpd));
            break;
        case 4:
            let taskToDel = readline.question("Qual tarefa você quer excluir? ");
            console.log(delTask(tasks, taskToDel));
            break;
        case 5:
            let taskToToggle = readline.question("Qual tarefa você quer marcar/desmarcar como concluída? ");
            console.log(toggleStatus(tasks, taskToToggle));
            break;
        case 6:
            console.log("Finalizando o task-cli!");
            runing = false;
            break;
    }
}
