function tratarErroELancar(erro){ 
     //throw new Error('Erro falta!!!')
     //throw 503 vc pode lançar um codigo
     //throw true vc pode manda um boleano
     //throw 'mensagem' vc pode mandar uma string

     throw{ // vc pode lancar tbm um objeto
         nome: erro.name,
         msf: erro.message,
         date: new Date
     }
     
}

function imprimirNomeGritado(obj){ 
    try{ 
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { 
        tratarErroELancar(e)
    }//fecha o catch
}
const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)