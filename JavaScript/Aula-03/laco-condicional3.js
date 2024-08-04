const prompt = require('readline-sync');

const numeroAleatorio = parseInt(Math.random() * 10);
let numeroDoUsuario = Number(prompt.question('Informe um número entre 0 e 10: '))

while (numeroAleatorio !== numeroDoUsuario) {
    console.log('Você errou! Tente novamente')
    numeroDoUsuario = Number(prompt.question('Informe um número entre 0 e 10: '))
}

console.log('Parabens, você acertou! O número era:', numeroAleatorio)