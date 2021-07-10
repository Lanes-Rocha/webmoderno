// NOVO RECURSO DO ES2015
//Neste caso o destructuring é as chaves exemplo: const const {nome, idade} = pessoa console.log(nome, idade);

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endreco: {
        rua: 'Rua ABC',
        numero: 1000
    }
}
const {nome, idade} = pessoa
console.log(nome, idade);


const {nome: n , idade: i} = pessoa;// criando uma veriavel para armazenar o atributo do objeto
console.log(n, i);

//Forçando um Undefined
//O sobreno aparecerá como Undefined, pois não foi declaro dentro do objeto
//bemHumorada será atribuida o valor true caso não tenha sido declarada no objeto

const{sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada);

//Destructing no atributo rua e numero
//Irá ocorrer o Undefined em cep, pois não foi declarado no objeto pessoa
//Neste caso abaxi, aplicamos o destructuring apenas em rua e numero e nao no atributo endereco
const{endreco: {rua, numero, cep}} = pessoa;
console.log(rua, numero, cep)