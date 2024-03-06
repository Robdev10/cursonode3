const { EventEmitter } = require('events');

class Estoque extends EventEmitter {
    constructor() {
        super();
        this.produtos = {};
    }

    adicionarProduto(nome, quantidadeInicial, estoqueMinimo) {
        this.produtos[nome] = {
            quantidade: quantidadeInicial,
            estoqueMinimo: estoqueMinimo
        };
    }

    alterarQuantidade(nome, quantidade) {
        this.produtos[nome].quantidade += quantidade;
        if (this.produtos[nome].quantidade <= this.produtos[nome].estoqueMinimo) {
            this.emit('estoqueBaixo', nome);
        }
    }
}

const estoque = new Estoque();

// Adicionando produtos ao estoque
estoque.adicionarProduto('Camiseta', 20, 5);
estoque.adicionarProduto('Calça', 15, 3);

// Manipulando o evento de estoque baixo
estoque.on('estoqueBaixo', (produto) => {
    console.log(`O estoque de ${produto} está baixo. Favor reabastecer.`);
});

// Simulação de alteração de quantidade
estoque.alterarQuantidade('Camiseta', -17); // Simula a venda de 17 camisetas
estoque.alterarQuantidade('Calça', -12); // Simula a venda de 12 calças

console.log(estoque.produtos);




