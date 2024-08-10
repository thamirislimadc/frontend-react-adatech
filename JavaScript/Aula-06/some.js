// Array.some()
// O método some() testa se ao menos um dos elementos de um array passa pelo teste implementado pela função fornecida.

const numeros = [-1, 3, 7, -3, 5];

const retorno = numeros.some((numero) => numero > 0);
console.log(retorno); // true - ao menos um elemento do array é maior que zero