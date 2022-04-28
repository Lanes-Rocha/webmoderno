const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
       console.log(this.saudacao) 
    }

}
pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO

const falarDePessoas = pessoa.falar.bind(pessoa)// usando o bind eu consigo acessar o this da constante pessoa
falarDePessoas()

const falar2 = pessoa.falar // sem o bind não consigo acessar o this da funcao falar do contexto pessoa.
falar2()