/*const {promisify} =  require("util")


const writefile = promisify(require("fs").writeFile);

const conteudo =  `criando um arquivo utilizando promisify do modulo nativo util `


writefile("utilAquivo.txt", conteudo).then(() =>{
console.log("arquivo utilaquivo criado com sucesso")
    
}).catch((err) =>{

    console.log(`deu erro: ${err}`)
});*/

//-------------------------------------

//promiseweitefile


/*
const {writeFile} = require('fs');

function criaarquivo(name, content){
    return new Promise((resolve, reject) =>{

        writeFile(name, content, err =>{

            if(err) return reject(err)
            resolve();
        })
    })
}

criaarquivo('texto.txt', 'esse é um teste para saber se realmente estou entendendo pelo menos um pouco rs')
.then((res) =>{ console.log('texto.txt criado com sucesso!')})
.catch(err => console.log(err))

*/
//-------------------------------


//asyncread

const fs = require('fs').promises 


async function read(){


    const data = await fs.readFile('texto.txt', 'binary');

    return data;


}



    read().then(data => {
        console.log(data.toString());
    }).catch (error => {
        console.log(error);

    }) 
       

