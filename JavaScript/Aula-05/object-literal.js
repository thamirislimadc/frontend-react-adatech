// Object literal

const pessoa = {
    nome: 'Thamiris',
    idade: 31,
    altura: 1.55,
    ehProgramadora: true,
    hobbies: ['ler', 'assistir filmes', 'viajar'],
};

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.hobbies[2]) // viajar


// Adicionando propriedades
pessoa.profissao = 'Desenvolvedora Front-end';
console.log(pessoa);

// Alterando propriedades
pessoa.idade = 32;
console.log(pessoa);

// Deletando propriedades
delete pessoa.ehProgramadora;
console.log(pessoa);

// Acessando propriedades com colchetes
console.log(pessoa['nome']);
console.log(pessoa['hobbies'][1]);
console.clear();

// Outros exemplos
const {nome, profissao} = pessoa;

console.log(nome);
console.log(profissao);




