//FUNÇÃO SEM RETORNO

function imprimirSoma(a, b)
{
    console.log(a+b);
}
imprimirSoma(2,3);

//FUNÇÃO COM RETORNO

function soma(a, b = 1) {
    return a + b;
}
console.log(soma(2,3));
console.log(soma(2));//Como temos o valor padrão de b = 1 quando imprimir a função o resultado será 3.
console.log(3)//Undefined
