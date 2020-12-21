/*
    Em Javascript objetos é descrito como uma dupla chave de nome e valor
*/ 

const prod1 = {};// Criando um objeto vazio
prod1.nome = 'Celular Ultra Mega'; //inserindo valores dinâmicamente no objeto prod1
prod1.preco = 4998.90; //inserindo valores dinâmicamente no objeto prod1
prod1['Desconto Legal'] = 0.40 //Embora o js aceite e adicione atributos e valores no objeto devemos evetiar essa notação

console.log(prod1);

//Outra notação para criar um objeto
const prod2 = {
    nome : 'Camisa Polo',
    preco : 79.90
}
console.log(prod2);