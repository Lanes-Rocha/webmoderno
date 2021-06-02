console.log(typeof Object);// - Essa é uma declaração de uma função.
console.log(typeof new Object);// Instanciando uma função com um objeto.

const Cliente = function() {};// Uma constante recebendo uma função
console.log(typeof Cliente); // Criando um objeto
console.log(typeof new Cliente);// Instanciando a função com um objeto.

class Produto {}; //criando uma classe com o padrão da (Ecma Script 2015 e 2016)
console.log(typeof Produto);
console.log(typeof new Produto());