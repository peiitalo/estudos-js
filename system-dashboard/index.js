const processos = [{pid: 101, nome: "nginx", cpu: 5, memoria: 120, usuario: "root"}, {
    pid: 102,
    nome: "node",
    cpu: 15,
    memoria: 450,
    usuario: "node_user"
}, {pid: 103, nome: "postgres", cpu: 8, memoria: 800, usuario: "postgres"}, {
    pid: 104,
    nome: "python",
    cpu: 25,
    memoria: 200,
    usuario: "node_user"
}, {pid: 105, nome: "bash", cpu: 1, memoria: 15, usuario: "root"}, {
    pid: 106,
    nome: "docker",
    cpu: 12,
    memoria: 600,
    usuario: "root"
}];

function filterRoot(list) {
    return list.filter(item => item.usuario === "root");
}

function processReport(list) {
    return list
        .filter(item => item.cpu >= 10)
        .map(item => `${item.nome}: ${item.cpu}%`);
}

function calcMemory(list) {
    return list
        .filter(item => item.usuario === "node_user")
        .reduce((acc, item) => acc + item.memoria, 0);
}

function orderByMemory(list) {
    return list.sort((a, b) => b.memoria - a.memoria)
}

function getCriticReport(list) {
    return list
        .filter(item => item.usuario !== "root")
        .sort((a, b) => b.cpu - a.cpu)
        .map(item => ({
            "pid": item.pid, "info": `${item.nome} (${item.usuario})`
        }))
}

// console.log(filterRoot(processos));
// console.log(processReport(processos));
// console.log(calcMemory(processos))
// console.log(orderByMemory(processos))
console.log(getCriticReport(processos))