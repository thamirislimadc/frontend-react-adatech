let notaDoAluno = Number(prompt.question('Digite a nota do aluno: '));
let somaDasNotas = 0; //variável que vai armazenar a soma das notas

while (notaDoAluno >= 0) {
    somaDasNotas = somaDasNotas + notaDoAluno; //soma as notas

    notaDoAluno = Number(prompt.question('Informe a proxima nota: '));
}

console.log(somaDasNotas); //imprime a soma das notas