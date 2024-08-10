// Array.forEach()
// O método forEach() executa uma dada função em cada elemento de um array.
// Muito parecido com o for...of, mas com a diferença de que o forEach() não retorna um novo array.

const numeros = [40, 34, 67, 89, 23, 10];

// function imprimirElemento(elemento) {
//     console.log(elemento);
// }
// numeros.forEach(imprimirElemento);

numeros.forEach((elemento) => {
    console.log(elemento);
});

