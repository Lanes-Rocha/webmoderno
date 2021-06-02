const funcs = [];

for(let i=0; i < 10; i++){ 
    funcs.push(function(){
        console.log(i);   
    })
}
// como car não tem escopo o retorno das funções trará o mesmo valor...
// ou seja todos os valores serão 10 abaixo
funcs[2](); 
funcs[8]();