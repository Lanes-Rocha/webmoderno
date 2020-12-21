let valor //variável declara mas não inicializada
console.log(valor);// como não atribuimos nenhum valor para essa variável aparecerá undefined

valor = null; //ausência de valor
console.log(valor); // foi declarada mas não atribuída um valor primitivo e não aponto para nem local na memória

//console.log(valor.toString()); //erro! porque vc não pode tentar acessar o tipo de uma variável do tipo null

const produto = {};
console.log(produto.preco); // Neste caso é um undefined pq preco não tem atribuição








