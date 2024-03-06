const express = require('express');

const router = express.Router();

function logreq(req, res, next) {
    
    console.log('Executando a função Middleware para a rota usuarios');
    return next();

}

router.get('/', logreq,  (req, res) => {

    res.send('Acessando lista de usuarios!');
})


router.get('/:id', (req, res) => {

    res.send('Acessando o Usuario com o id:  ' +req.params.id)
})

module.exports = router