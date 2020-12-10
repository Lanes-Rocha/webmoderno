const escola = "Universidade de Vila Velha";


console.log(escola.charAt(4));// charAT mostra a posição da string.
console.log(escola.charAt(32));// não vai retornar nada, pois não foi encontrado nenhum ccaractere nessa posição.
console.log(escola.charCodeAt(3));// O valor a ser mostrado será o cod da tabela ASCII ou da CodeAt do caractere na posição 3.
console.log(escola.indexOf('n'));//irá procurar se existe esse caractere e mostrar seu índice.
console.log(escola.substring(1));//Não irá mostrar o caractere do índice 1 porém todo o resto sim
console.log(escola.substring(0, 3));// irá mostrar os caracteres dos índices de 0 á 2, porém o 3 não
console.log('Escola '.concat(escola).concat("!!!"));// o .concat concatena 
console.log(escola.replace("e", '3'));

console.log('Ana,Maria,Lanes'.split(',')); //.split faz essa expressão virar array.






console.log();
console.log();