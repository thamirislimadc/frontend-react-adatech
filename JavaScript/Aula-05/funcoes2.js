// Funções anônimas
const dobroDoNumero = function(numero) {
    return numero * 2;
}

const dobro = dobroDoNumero(2);
console.log(dobro); // 4


// Arrow functions
const subtrair = (numero1, numero2) => { // => é o operador de função
    return numero1 - numero2;
}

const resultadoSubtrair = subtrair(10, 5);
console.log(resultadoSubtrair); // 5


// Outro exemplo de arrow function
const multiplicar = (numero1, numero2) => numero1 * numero2;
const resultadoMultiplicacao = multiplicar(10, 5);
console.log(resultadoMultiplicacao); // 50



