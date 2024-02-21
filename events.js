const EvemtEmitter = require("events")

class Evento extends EvemtEmitter{}

const meuevento = new Evento();

meuevento.on("seguranca", (x, y)=>{

    console.log(`Executando o evento "seguranca": ${x}  ${y}`)
})


meuevento.emit("seguranca", "useradmin","alterou salario")

