// Array.map()
// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

//-------------Exemplo 01-----------------------------------------
const numeros = [40, 34, 67, 89, 23, 10];

const novoArray1 = numeros.map((elemento) => {
    return elemento * 2; // multiplicando cada elemento do array por 2
});

console.log(novoArray1); // [ 80, 68, 134, 178, 46, 20 ]
//------------------------------------------------------


//-------------Elevando ao Quadrado---------------------
const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const novoArray2 = valores.map((valor) => valor ** 2);
console.log(novoArray2); // [ 1521, 2025, 1024, 576, 16, 484, 4, 2401, 529, 64 ]
//------------------------------------------------------


//-------------Calculando o total de um carrinho de compras com Array de Objetos ---------------------
const carrinho = [
    {produto: 'feijão', preco: 7.98, quandidade: 3},
    {produto: 'arroz', preco: 4.98, quandidade: 5},
    {produto: 'leite 1L', preco: 6.99, quandidade: 2}
];

const carrinhoComTotal = carrinho.map((itemDoCarrinho) => {
    return { 
        produto: itemDoCarrinho.produto, // mantendo o nome do produto
        total: itemDoCarrinho.preco * itemDoCarrinho.quandidade // calculando o total de cada item do carrinho
    };
});

console.log(carrinhoComTotal);