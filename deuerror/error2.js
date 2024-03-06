const {EventEmitter} = require('events');

const emitter =  new EventEmitter;

const validaobjeto = (a) => {
            if(typeof a === 'object'){

            console.log('Sucesso!!!');

            process.exit();
            
             
        }else{ emitter.emit('error', new Error(' tipo informado invalido'));
        }

        process.exit();

};

emitter.on('error', (err)=>{

    console.log('evento:' + err.message);


})


//let dados =  {name: 'Robson', idade: 25};

let dados = 123;



validaobjeto(dados)