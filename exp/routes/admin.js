const express =  require('express');
const router  = express.Router();

router.get('/', (req, res) => {

    res.send('Acessando o Administrador!');
})


router.get('/:id', (req, res) => {

    res.send('Acessando o Administrador com o id:  ' +req.params.id)
})

router.post('/', (req, res) => {
    const corpo = ` Login: ${req.body.login} \n Senha: ${req.body.senha}`

    res.send('Acessando o administrador via Post' + "\n"  + corpo);
})

router.patch('/:id', (req, res)=>{

    res.send('Acessando o Administrador via Patch! com o id: ' + req.params.id);


})

router.put('/:id', (req, res)=>{

    res.send('Acessando o Administrador via Put!')

})

router.delete('/:id', (req, res)=>{

    res.send('Acessando o Administrador via DELETE!')

})



module.exports = router
