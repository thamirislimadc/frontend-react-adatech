//Laços de condicionais > estrutuura de repetição não controlada

const prompt = require('readline-sync');
let saldo = Number(prompt.question('Digite o saldo da sua conta: '));

while (saldo < 0) { //enquanto o saldo for menor que 0, o usuário terá que informar novamente o saldo
    saldo = Number(
        prompt.question('Saldo invalido. Informe novamente:')
    );
}

console.log(saldo);

