const prompt = require('readline-sync');

let notaDoAluno = Number(prompt.question('Digite a nota do aluno: '));
let somaDasNotas = 0; //variável que vai armazenar a soma das notas
let qtdNotasValidas = 0; //variável que vai armazenar a quantidade de notas válidas digitadas

while (notaDoAluno >= 0) {
    somaDasNotas += notaDoAluno; //soma as notas
    qtdNotasValidas++; //incrementa a quantidade de notas válidas

    notaDoAluno = Number(prompt.question('Informe a proxima nota: '));
}

console.log(somaDasNotas); //imprime a soma das notas
console.log(qtdNotasValidas); //imprime a quantidade de notas válidas

console.log(`A média das notas é: ${somaDasNotas / qtdNotasValidas}`); //imprime a média das notas