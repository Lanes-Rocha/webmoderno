/*
    Neste caso irá acontecer o que chamamo de içamento e/ou não irá da erro pq a var a será
    declarada na acima da linha 7 porém indefinida, mas abaixo da linha 8 irá imprimir normalmente.
    Quase todas as linguagens a execução seria linha por linha e neste caso daria erro por não termos
    declarado a variável antes da linha 7 mas o javascript de esse recuso de hosting que impede um erro fatal neste caso.
*/
console.log('a = ', a)
var a = 2;
console.log("a = ", a);

//O hosting em javascript é um comportamento padrão para mover a declaração da variável para o top do código.