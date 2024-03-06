const express = require('express');
const app =  express();
const adminroutes = require('./routes/admin')
const usuariosroutes = require('./routes/usuarios')
const cookieparser = require('cookie-parser')

app.use(express.json());
app.use(cookieparser());


app.use((req, res, next) => {

    console.log('Executando middleware em nivel de aplicação');

    return next();
});


app.get('/setcookie', (req, res) => {

    res.cookie('user', 'Robson Roberto', {maxAge: 900000, httpOnly: true})
    return res.send("Cookie gravado com sucesso!");
})

app.get('/getcookie', (req, res) => {

    let user = req.cookies['user']

    if(user){
        return res.send(user);
    }
})



app.get('/', (req, res) => {

    res.send('Hello World Robson !');
})

app.use('/admin', adminroutes)

app.use('/usuarios', usuariosroutes)


app.get('*',(req, res, next) => {

    setImmediate(()=>{
        next(new Error('temos um problema'))
    })
})


app.use((err, req, res, next) =>{

    console.log('geramos um erro veja as instruções para corrigir!')
    res.status(500).json({message: err.message})
})



app.listen(3000, () => {

    console.log(`Servidor Rodando: http://localhost:3000`);


})