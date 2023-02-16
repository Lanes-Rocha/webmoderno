function criarProduto(nome, preco){
   return{
        nome,
        preco,
        desconto: 0.1
   }
}
console.log(criarProduto('Notebook', 1999.99))
console.log(criarProduto('ipad', 1000.00))