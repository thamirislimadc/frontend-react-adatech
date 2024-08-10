// Array.filter()
// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

// ---------- Exemplo 01 - filtrando números pares ----------
const numeros = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8]; // vamos filtrar os números pares

const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares); // [ 32, 24, 4, 22, 2, 8 ]
// ----------------------------------------------------------


// ---------- Exemplo 02 - Array de objetos ----------
const pessoas = [
    {
        nome: 'Thamiris',
        idade: 31
    },
    {
        nome: 'João',
        idade: 45
    },
    {
        nome: 'Maria',
        idade: 37
    }
];

const pessoasMenoresDeQuarentaAnos = pessoas.filter((pessoa) => pessoa.idade < 40);
console.log(pessoasMenoresDeQuarentaAnos); // [ { nome: 'Thamiris', idade: 31 }, { nome: 'Maria', idade: 37 } ]
// ----------------------------------------------------------

// ---------- Exemplo 03 - Array de objetos 02 ----------
const produtos = [
    {nome: 'Suco de laranja', preco: 8.00, tipo:'Bebida'},
    {nome: 'Batata frita', preco: 15.50, tipo:'Comida'},
    {nome: 'Pizza', preco: 39.90, tipo:'Comida'},
    {nome: 'Chocolate', preco: 5.00, tipo:'Comida'},
    {nome: 'Pastel', preco: 2.50, tipo:'Comida'},
    {nome: 'Coca-cola', preco: 9.00, tipo:'Bebida'},
];

const comidas = produtos.filter((produto) => produto.tipo === 'Comida' && produto.preco < 10);
console.log(comidas); // [ { nome: 'Chocolate', preco: 5, tipo: 'Comida' }, { nome: 'Pastel', preco: 2.5, tipo: 'Comida' } ]