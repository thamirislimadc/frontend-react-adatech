// * Operador ternário

// O operador ternário é uma forma mais enxuta de escrever um if/else. 


// Exemplo 1
const idade = 21;
idade >= 18 ? console.log('Voce eh maior de idade!') : console.log('Voce eh menor de idade!');
// neste exemplo o "?" é o "if" e o ":" é o "else"

// Exemplo 2
const mensagem = idade >= 18 ? 'Voce eh maior de idade!' : 'Voce eh menor de idade!';
console.log(mensagem);
// neste exemplo a variável "mensagem" recebe o valor retornado da condição ternária


// Truthy e Falsy
// Em JavaScript, valores que não são booleanos podem ser avaliados como verdadeiro ou falso.

// Valores considerados falsos (falsy): false, 0, '', null, undefined, NaN
// Valores considerados verdadeiros (truthy): true, qualquer número diferente de zero, qualquer string não vazia, qualquer objeto ou array, qualquer função


