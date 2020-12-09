const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));//função toFixed(2) retona 2 casa decimais após a vírgula
console.log(media.toString());// A saída da média estará em string
console.log(media.toString(2));//Convertido em binário
console.log(typeof media);
console.log(typeof Number);// Mostra que Number é um função
