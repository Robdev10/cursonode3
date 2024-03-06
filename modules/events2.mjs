import {EventEmitter} from "events"

class Evento extends EventEmitter{}

const meuevento = new Evento();


//subscribe - assinantes
meuevento.on("seguranca", (x, y)=>{

    console.log(`Executando o evento "seguranca": ${x}  ${y}`)
})

//publish - emissor
meuevento.emit("seguranca", "useradmin","alterou salario")

meuevento.on('encerrar',(dados)=>{
    console.log(`Assinante:` + dados)
})

meuevento.emit('encerrar', 'Encerrando a execução da importação dos dados!')