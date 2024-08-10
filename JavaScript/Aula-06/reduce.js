// Array.reduce()
// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.


//-------------SOMA----------------
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, elemento) => {
    console.log(acumulador, elemento);
    return acumulador + elemento;
}, 0);

console.log(soma)


//-------------MÉDIA---------------
const numeros1 = [1, 2, 3, 4, 5];

const media = numeros1.reduce((acumulador, elemento, index, array) => {
    acumulador += elemento;

    if (index === array.length - 1) {
        return acumulador / array.length;
    }

    return acumulador;
}, 0);

console.log(media);

//-------------SOMA DOS PARES---------------
const numeros2 = [1, 2, 3, 4, 5];

const somaPares = numeros2.reduce((acumulador, elemento) => {
    if (elemento % 2 === 0) {
        acumulador += elemento;
    }

    return acumulador;
}, 0);

console.log(somaPares);


//-------------TOTAL A PAGAR DO CARRINHO---------------
const carrinho = [
    { produto: 'Caneta', preco: 1.5 },
    { produto: 'Lápis', preco: 1 },
    { produto: 'Caderno', preco: 15 },
    { produto: 'Borracha', preco: 0.5 }
];

const totalAPagar = carrinho.reduce((acumulador, item) => {
    return acumulador + item.preco;
}, 0);

console.log(totalAPagar); // 18