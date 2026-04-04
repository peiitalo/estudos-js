const estoque = [
    {id: 1, nome: "Teclado Mecânico", categoria: "Periféricos", preco: 200, quantidade: 5},
    {id: 2, nome: "Monitor 4K", categoria: "Vídeo", preco: 1500, quantidade: 2},
    {id: 3, nome: "Mouse Gamer", categoria: "Periféricos", preco: 120, quantidade: 0},
    {id: 4, nome: "Cabo HDMI", categoria: "Acessórios", preco: 30, quantidade: 15},
    {id: 5, nome: "Headset USB", categoria: "Periféricos", preco: 250, quantidade: 3}
];

function filtrarSemEstoque(list) {
    return list.filter(item => item.quantidade === 0);
}

function gerarListaDePrecos(list) {
    return list.map(item => `Produto: ${item.nome} - R$ ${item.preco}`)
}

function aplicarAumento(list, aumento) {
    let porcetagem = aumento / 100
    return list.map(item => {
        return {
            ...item,
            preco: Number((item.preco * (1 + porcetagem)).toFixed(2))
        }
    })
}

function calcularValorTotal(list) {
    let total = 0
    for (let item of list) {
        total += item.preco * item.quantidade
    }

    return `O valor total de todos os itens é: ${total}`
}

function returnItems(list, categoria) {
    const totalItems = list
        .filter(item => item.categoria === categoria)
        .reduce((acc, item) => {
            return acc + item.preco * item.quantidade;
        }, 0);

    return `O valor total de todos os ${categoria.toLowerCase()} é: ${totalItems}`
}

function venderItem(list, id, quantidadeVendida) {
    let itemVendido = list.find(item => item.id === id);
    let quantidadeNova = itemVendido.quantidade - quantidadeVendida;
    if (quantidadeNova < 0) {
        return `Não foi realizar a venda, pois a quantidade de venda é maior que o estoque atual.`;
    };

    return  list.map(item => {
        if (item.id === id) {
            return {
                ...item,
                quantidade: quantidadeNova
            }
        }
        return item
    });
}

function aplicarCupom(list, categoria, desconto) {
    return list.map(item => {
        if (item.categoria === categoria) {
            let novoPreco = item.preco - (item.preco * (desconto / 100));
            return {
                ...item,
                preco: novoPreco
            }
        }
        return item;
    })
}


console.log(filtrarSemEstoque(estoque));
console.log(gerarListaDePrecos(estoque));
console.log(aplicarAumento(estoque, 10))
console.log(calcularValorTotal(estoque))
console.log(returnItems(estoque, "Periféricos"))
console.log(aplicarCupom(estoque, "Periféricos", 20))