// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal as funçoes
function fun1(){ }

// Armazenar em uma variável

const fun2 = function(){}

// Armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]

console.log(array[0](2, 3))

// Armazenar em um atributo e objeto
const obj = {}
obj.falar = function(){ return 'opa'}
console.log(obj.falar())

// Passar fnçao como parâmetro
function run(fun) {
    fun() // como return
}
run(function () {console.log('Executando...') })

function soma(a,b){
    return function(c) {// Invocando um função com outro valor em outra função.
        console.log(a + b + c)
    }
}

// Formas de exibir
// Forma 1
// // passando os valores(paran a e b) e o segundo parenteses é o valor do returno da função dentro do escopo
soma(2, 3)(4)

// Forma 2
// Você pode armazenar dentro de uma constante a função e os param
// Depois só imprimir "linha 42"
const cincoMais = soma(2, 3)
cincoMais(a)// 