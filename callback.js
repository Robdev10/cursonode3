function soma(x, callback) {

    return setTimeout(() =>{

      return callback(null, x + 5000 );
     }, 3000)

}


function resolvesoma(err, resultado){

if(err) throw err;

console.log(resultado);

}

soma(2000, resolvesoma); 