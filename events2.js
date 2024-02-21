const express = require('express');
const EventEmitter = require('events');
const app = express();
const meuEventEmitter = new EventEmitter();



// Middleware para log de requisições
app.use((req, res, next) => {
    // Emitir o evento "requisicao" com informações sobre a requisição
    meuEventEmitter.emit('requisicao', {
        metodo: req.method,
        url: req.url,
        dataHora: new Date()
    });
    next();
});



// Rota simples
app.get('/', (req, res) => {
    res.send('Hello World!');
});



// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta ${PORT}`);
});



// Ouvinte para o evento "requisicao"
meuEventEmitter.on('requisicao', (infoRequisicao) => {
    console.log(`Nova requisição: ${infoRequisicao.metodo} ${infoRequisicao.url} em ${infoRequisicao.dataHora}`);
});