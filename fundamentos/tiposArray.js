const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);// Em Javascript não aparece erro por tentar acessar um elemento no vetor que não existe;

//incluíndo elemento no array
valores[4] = 10;
console.log(valores);
//acessando a quantidade de elementos no array
console.log(valores.length);

//função push, incluíndo vários elementos no array;
valores.push({id: 3}, false, null, 'teste');
console.log(valores);

//função pop, irá retirar o último elemento do array
console.log(valores.pop());// nesse caso irá retirar o elemento 'teste'
console.log(valores);// imprimindo o array sem o último elemento 

//retirando um elmento de um array apontando seu índice
delete valores[0];
console.log(valores);

console.log(typeof valores);//No Javascript o array é caracterizado como um objeto