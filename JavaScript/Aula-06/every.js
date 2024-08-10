// Array.every()
// O método every() testa se todos os elementos de um array passam pelo teste implementado pela função fornecida.

//------------------------------------------------------
// const numeros = [40, 34, 67, 89, 23, 10];

// const todosPositivos = numeros.every((elemento) => elemento > 0); // a condição é verdadeira para todos os elementos do array
// console.log(todosPositivos); // true
//------------------------------------------------------

const pessoas = [
    {
        nome: 'Thamiris', // indice 0
        idade: 31
    },
    {
        nome: 'João', // indice 1
        idade: 45
    },
    {
        nome: 'Maria', // indice 2
        idade: 37
    }
];

const todosMaioresDeIdade = pessoas.every((pessoa) => pessoa.idade >= 18);
console.log(todosMaioresDeIdade); // true - todos são maiores de idade

