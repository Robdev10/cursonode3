const {spawn} = require('child_process')

const ls = spawn('ls')

ls.stdout.on('data', function(data){

    console.log(`stdout: ${data}`)
});



ls.stderr.on('data', function(data){

    console.log(`stderr: ${data}`)
});



ls.on('close', function(code){

console.log(`processo em segundo plano finalizado com o codigo ${code}`);
})
