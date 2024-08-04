const array = [34, 12, 56, 78, 90, 32, 89, 69, 24, 45];

// Percorrer um array com for
for (let i = 0; i < array.length; i++) {
    console.log(i, array[i]);
}

// Percorrer um array com for-of
for (const elemento of array) { // o for-of percorre os elementos do array
    console.log(elemento);
}

// Percorrer um array com for-in
for (const indice in array) { // o for-in percorre os índices do array
    console.log(indice, array[indice]);
}