const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template = `
    Olá
    ${nome}!`;
console.log(concatenacao, template);

//expressões 
console.log(`1 + 1 = ${1 + 1}`);// Neste caso só o que está dentro das chaves irá ser interpretado.
const up =  texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}`);// chamando uma função no contexto de string