//ARMAZENDANDO UMA FUNÇÃO EM UMA VARIÁVEL

const imprimirSoma = function(a,b){ 
    console.log(a,b);

}
imprimirSoma(2,3);

//ARMAZENDO UMA FUNÇÃO ARROW EM UMA VARIÁVEL

const soma = (a,b) => {
    return a + b;

}
console.log(2,3);

//RETORNO IMPLÍCITO
const subtracao = (a,b) => a - b;
console.log(subtracao(2,3));

const imprimir2 = a => console.log(a)
imprimir2 ("Legal!!!")