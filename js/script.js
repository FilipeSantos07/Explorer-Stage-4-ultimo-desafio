/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela. 
*/

let students = [
    {
        name:"Pedro",
        n1:8.5,
        n2:7.5
    },
    {
        name:"Ana",
        n1:6.5,
        n2:4.2
    },
    {
        name:"Caio",
        n1:7.5,
        n2:8.6
    },
    {
        name:"Rafael",
        n1:5.5,
        n2:3.2
    },
    {
        name:"Filipe",
        n1:8.5,
        n2:8.7
    }
]

function calculateMedia(n1,n2) {
    return ((n1 + n2) / 2).toFixed(1)
}

for(let position of students) {

    if(calculateMedia(position.n1,position.n2) > 7) {

        alert(`A média do(a) aluno(a) ${position.name} é: ${calculateMedia(position.n1,position.n2)} \n
        Parabéns, ${position.name}! Você foi aprovado(a) no concurso!`)
        
    } else {
        alert(`A média do(a) aluno(a) ${position.name} é: ${calculateMedia(position.n1,position.n2)} \n
        Não foi dessa vez, ${position.name}! Tente novamente!`)
    }
}