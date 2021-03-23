{{{{
// Embora a variável tenha sido declarada utilizando var dentro de um bloco
// a mesma poderá ser chamada em qualquer lugar de seu código
     var sera = 'Será??'
     console.log(sera); 
}}}}
// Nesse caso como a variável foi criada fora de uma função ela poderá ser chamada em qualquer lugar
console.log(sera);

// Em um novo escopo especial, neste caso, uma função.
// A variavel poderá ser utilizada e/ou estará visível apenas dentro da função

// Escopo de variável utilizando var temos:
// * Escopo global
// * Escopon de função

function teste(){
    var local = 123;
    console.log(local);
}
// Abaixo a função a variável nao poderá ser utilizada, pois está dentro de um escopo de uma função.

teste();// Chmando a função funcionará pois ela irá trazer seu escopo completo.
console.log(local);// Ocorrerá um erro, pois a variável local, não poderá ser acessada.


