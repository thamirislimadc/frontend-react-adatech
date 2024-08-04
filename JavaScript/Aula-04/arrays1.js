// Tipos primitivos no JS: Number, String, Boolean, Undefined, Null, Symbol
// Estruturas de dados: Arrays, Maps, Objects, Fila(Stack)...

// Fatiamento de arrays
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numeros.slice(0, 7)); // [0, 1, 2, 3, 4, 5, 6]
console.log(numeros.slice(2)); // [2, 3, 4, 5, 6, 7, 8, 9] - pega do índice 2 até o final

// Inserindo elementos no final array
numeros.push(10);
console.log(numeros); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Inserindo elementos no início do array
numeros.unshift(-1);
console.log(numeros); // [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Removendo elementos do final do array
numeros.pop();
console.log(numeros); // [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Removendo elementos do início do array
numeros.shift();
console.log(numeros); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
