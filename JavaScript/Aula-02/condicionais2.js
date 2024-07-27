// O switch case é muito utilizado para substituir vários if else encadeados.

const permissoes = 'diretor' // 'professor' || 'aluno' || 'diretor'

switch(permissoes) {
    case 'aluno':
        console.log('Voce so pode visualizar as aulas!')
        break
    case 'professor':
        console.log('Voce pode alterar e criar aulas!')
        break
    case 'diretor':
        console.log('Voce pode fazer tudo!')
        break
    default:
        console.log('Voce nao tem permissao para acessar o sistema!')
}