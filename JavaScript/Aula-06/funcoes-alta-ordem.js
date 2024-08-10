// FUNÇÕES DE ALTA ORDEM (HIGHER-ORDER FUNCTIONS)
// Função de alta ordem é uma função que recebe outra função como parâmetro ou retorna uma função.

// 1. Função que retorna outra função como parâmetro (callback)
function welcome(courseName) {
    return (studentName) => {
        console.log(`Olá, ${studentName}! Seja bem-vindo(a) ao curso de ${courseName}!`);
    }
}

const displayWelcomeToFrontEndCourse = welcome('Front-end em React');
displayWelcomeToFrontEndCourse('Thamiris'); // Olá, Thamiris! Seja bem-vindo(a) ao curso de Front-end em React!


// 2. Função que recebe outra função como parâmetro
const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

// Operação: função que realiza a operação entre dois números, ou seja, ela precisa ser uma fuuunção que recebe duas funções como parâmetro
const calcular = (funcaoDaOperacao, num1, num2) => funcaoDaOperacao(num1, num2);

// calcular = (10, 5, somar) => somar(10, 5) => 10 + 5 = 15
const retorno = calcular(
    10,
    5,
    (num1, num2) => num1 * num2 + 2 * num1 * num2
);

console.log(retorno); // 75