let isAtivo = false;
console.log(isAtivo);//imprimindo o valor booleno false pois o isAtivo foi declarado como false

isAtivo = true;
console.log(isAtivo);//imprimindo o valor booleno true pois o isAtivo foi declarado como true

isAtivo = 1;

console.log(!isAtivo);//O valor booelano de isAtivo atual é true até essa linha 
                      //colocando a negação ! o valor será impresso como false.s
console.log(!!isAtivo);// colocando a negação da negação !! o valor volta para sua origem declara, 
// neste caso o isAtivo volta ser true.
console.log('os verdadeiros')
console.log(!!3)// convertendo o 3 em verdadeiro ou false
console.log(!!-1);
console.log(!!' ');
console.log(!![])// Mesmo o array vazio neste caso ele é verdadeiro
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos');
console.log(!!0);
console.log(!!-'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
console.log('para finalizar');
console.log(!!('' || null || 0 || ' '));

let nome = '';
console.log(nome || 'Desconhecido');

console.log("ÚLTIMA ATUALIZAÇÃO");
console.log("Configuração final");

console.log("Retorno do Github");
