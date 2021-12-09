function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unário negação lógica

    //criação do objeto chave e valor neste caso precisamos colocar chave e valor, pois da forma
    //descrita abaixo já faz de forma ocutal. ex.: comprarSorvete:comprarSoverte entao apenas declarando
    //da forma abaixo, como citado, nosso objeto já faz de forma oculta para não haver redundância.
    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel} 

}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))