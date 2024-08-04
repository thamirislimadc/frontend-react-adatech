const prompt = require('readline-sync');
// For - estrutura de repetição controlada por contador
// for (inicialização da variavel de controle; condição de parada do for; incremento da variavel) {bloco de código}

let i = 0;
for (i = 0; i <= 5; i++) {
    console.log(i);
}

// É possível omitir alguns parâmetros do for
// Exemplo: for (;;) {}

console.clear();

// Exemplo - ler 5 números e calcular qual é o maior

let maiorNumero = 0;
let numeroInformado;

for (i = 0; i < 5; i++) {
    numeroInformado = Number(prompt.question("Informe um numero positivo: "));
    if (numeroInformado > maiorNumero) { // Se o número informado for maior que o maior número já informado
        maiorNumero = numeroInformado;
    }
}

console.log(`O maior numero informado foi: ${maiorNumero}`);