// Array.find()
// O método find() retorna o primeiro elemento de um array que satisfaça a condição passada na função de callback.


//------------------------------------------------------
// const numeros = [40, 34, 67, 89, 23, 10];

// const encontrado = numeros.find((numero) => {
//     return numero < 40 && numero > 10;
// });

// console.log(encontrado); // O método find() retornou o primeiro elemento do array que satisfez a condição passada na função de callback.
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

const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade > 40);
console.log(pessoaEncontrada); // { nome: 'João', idade: 45 }


// find.index()

const indexPessoaEncontrada = pessoas.findIndex((pessoa) => pessoa.idade > 40);
console.log(indexPessoaEncontrada); // 1 - joão está no índice 1 do array pessoas

