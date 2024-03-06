

function execute(){

    executeto();


}

function executeto(){

    throw new Error('deu erro agora!')

}

function init(){

try {

    execute();
    
} catch (e) {

    console.log(`temos um problema! deu erro: ${e.message}`)
    
}


}

init();
console.log('depois do erro!')

