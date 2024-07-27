const prompt = require('readline-sync')

const idade = prompt.question('Qual eh a sua idade?')

// o JS sempre vai ler o impuut do usuário como uma string

// JS tem tipagem fraca, não retorna erro se tentar somar uma string com um número

// Convertendo a string em um número
// Coerção explícita (conversão manual)
const idadeNumber = Number(idade)
console.log(idadeNumber, typeof idadeNumber)
console.log(Number("Xuxa"), typeof Number("Xuxa")) // NaN (Not a Number)
console.log(Number("10"), typeof Number("10")) // 10 number
console.log(Boolean(0)) // Zero sempre vai ser falso. Qualquer outro número é verdadeiro
console.log(Boolean(-1)) // True

// Coerção implícita (conversão automática)
console.log(10 + "5") // 105 (string)
console.log("10" - 5) // 5 (number)
console.log("10" * 5) // 50 (number)
console.log("10" / 5) // 2 (number)

let n = 1 + '1' // 11 (string)
n = n - 1 // 10 (number)
console.log(n)

console.log(2 + 3 + 4 + '5') // 95 (string)
console.log('5' + 2 + 3 + 4) // 5234 (string)
console.log('10' - '4' - '3' - 2 + '5') // 15 (string)



