const {EvemtEmitter} = require("events")

class Evento extends EvemtEmitter{}

const meuevento = new Evento();


//subscribe - assinantes
meuevento.on("seguranca", (x, y)=>{

    console.log(`Executando o evento "seguranca": ${x}  ${y}`)
})

//publish - emissor
meuevento.emit("seguranca", "useradmin","alterou salario")

meuevento.on('encerrar',()=>{
    console.log(`Assinante:` + dados)
})

meuevento.emit('encerrar', 'Encerrando a execução da importação dos dados!')