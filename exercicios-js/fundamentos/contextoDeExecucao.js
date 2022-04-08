let a = 3

globalThis.b = 123

this.c = 456

this.d = false
this.e = 'teste'

/*PRINTS*/

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Criando uma variável maluca rsrs: sem valor e let!
abc = 3 // nao faça isso em casa
console.log(global.abc)

// module.exports = { e: 456: false, g: 'teste'}


// Observações ter conciência do run time que vc está 
// Não ultilizar 'var' e nem 'let' de forma errada 
// Pois esse processo pode acarretar problemas do tipo em um escopo global nao utilizar var e sim let pra
// declarar pois pode haver subistiuições de outras variáveis.
// Sempre fuja de criar variaveis em escopo global
