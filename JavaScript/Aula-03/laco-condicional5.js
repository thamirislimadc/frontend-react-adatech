const prompt = require('readline-sync');
let saldo;

do { //enquanto o saldo for menor que 0, o usuário terá que informar novamente o saldo
    saldo = Number(prompt.question('Informe um saldo valido: '));
} while (saldo < 0);

console.log(saldo);

// Diferença do DO WHILE para o WHILE: o DO WHILE executa o bloco de código pelo menos uma vez,
// mesmo que a condição seja falsa. O WHILE não executa o bloco de código se a condição for falsa.