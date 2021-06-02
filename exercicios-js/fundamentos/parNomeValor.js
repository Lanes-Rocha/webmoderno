// par nome/valor
const saudacao = 'opa' // Contexto léxico 1

function exec(){
    const saudacao = 'fala'; // Contexto léxico 2
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Lanes',
    idade: 34,
    peso: 90,
    endereco:{
        logradouro: 'Rua fulano de tal',
        numero: 123
    }
}
console.log(saudacao);
console.log(exec());
console.log(Cliente);