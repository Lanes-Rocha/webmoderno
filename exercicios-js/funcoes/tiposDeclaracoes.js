console.log(soma(3, 4))

// Function Declaration, neste caso o resultado da função pode vir antes da declaração que vai funcionar
// No javascript todas as funções são carregadas primeiro pra depois começar a executar o código.


function soma(x ,y){
    return x + y
}

// Function Expression, neste caso a partir de um função anônima eu sou obrigado a chama-la depois da declaração
const sub = function(x, y){
    return x - y
}

// Named function expression, neste caso a partir de um função nomeada eu sou obrigado a chama-la depois da declaração

const mult = function mult(x, y){
    return x * y
}
console.log(soma(3, 4))
