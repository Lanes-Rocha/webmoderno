console.log("Começando com o Let");

// Escopo de variável utilizando let temos:
// * Escopo global
// * Escopo de função
// * Escopo de bloco

var numero = 1;
{
    let numero = 2;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);