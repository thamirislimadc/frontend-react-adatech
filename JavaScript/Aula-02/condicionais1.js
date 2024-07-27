const prompt = require('readline-sync')

const idade = Number(prompt.question('Qual eh sua idade? '))
// const ehMaiorDeIdade = idade >= 18;


// Estrutura condicional: if e else
if(idade >= 18) {
  console.log('Voce eh maior de idade!')
} else {
  console.log('Voce eh menor de idade!')
}

// Estrutura condicional: else if
const mediaDoAluno = 6.99;

if (mediaDoAluno >= 7) {
  console.log('Aprovado!')
} else if (mediaDoAluno < 7 && mediaDoAluno >= 5) {
  console.log('Vai para a prova final!')
} else {
  console.log('Reprovado!')
}


// Operadores booleanos: comparações
const idadeDaPessoa = 18;
const temCNH = true;

if (idadeDaPessoa >= 18 && temCNH) {
    console.log('Voce pode dirigir!')
} else {
    console.log('Voce nao pode dirigir!')
}
