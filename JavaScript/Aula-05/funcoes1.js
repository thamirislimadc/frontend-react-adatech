// Funções
// Number(): converte um valor para um número
// ParseInt(): converte um valor para um número inteiro
// ParseFloat(): converte um valor para um número decimal
// isNaN(): verifica se um valor é NaN (Not a Number)

// Funções
function saudacao(nomeDoAluno) {
    console.log('Olá, seja bem-vindo(a) ao curso de Front-end em React, ', nomeDoAluno, '!');
}

saudacao("Thamiris"); // chamada da função


// Template strings ou literais
function saudacao(nomeDoAluno) {
    console.log(`Olá, seja bem-vindo(a) ao curso de Front-end em React, ${nomeDoAluno}!`);
}

saudacao("Thamiris"); // chamada da função

console.clear();

// Nome do curso como template string
function saudacao(nomeDoAluno, curso) {
    console.log(`Olá, seja bem-vindo(a) ao curso de ${curso}, ${nomeDoAluno}!`);
}

saudacao("Thamiris", "Front-end em React"); // chamada da função


// Exemplo básico de uso
function somar(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = somar(10, 20);

console.log(resultado); // 30
console.log(resultado / 2); // 15