const {readFile}  =  require('fs');

const http = require('http');
const host = '127.0.0.1';
const port = 3000;
const url = `https://${host}:${port}`;


let conteudo = '';


readFile('index2.html', function (err, files){

    if(err){
        throw err;
    }

    conteudo = files;
})

const server = http.createServer(function (req, res){

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end(conteudo)
});

server.listen(port, function(){

    console.log( `rodando servidor na url ${url}`)
})








