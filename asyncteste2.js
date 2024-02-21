// Função simulada para buscar informações de um usuário em um banco de dados externo
function buscarUsuarioNoBancoDeDados(id) {
    // Simulando uma consulta assíncrona ao banco de dados
    return new Promise((resolve, reject) => {
        // Simulando uma operação assíncrona
        setTimeout(() => {
            // Suponha que aqui estaria a lógica para buscar o usuário no banco de dados
            const usuarios = {
                1: { id: 1, nome: 'Alice' },
                2: { id: 2, nome: 'Bob' }
            };

            const usuario = usuarios[id];

            // Verificando se o usuário foi encontrado
            if (usuario) {
                resolve(usuario); // Usuário encontrado, resolvemos a promessa com as informações do usuário
            } else {
                reject(new Error('Usuário não encontrado')); // Usuário não encontrado, rejeitamos a promessa com um erro
            }
        }, 1000); // Simulando um tempo de resposta do banco de dados de 1 segundo
    });
}

// Função assíncrona para buscar um usuário pelo ID
async function buscarUsuarioPeloID(id) {
    try {
        // Aguarda a promessa retornada pela função buscarUsuarioNoBancoDeDados
        const usuario = await buscarUsuarioNoBancoDeDados(id);
        
        console.log('Informações do usuário:', usuario);
        
    } catch (error) {

        console.error('Ocorreu um erro ao buscar o usuário:', error.message);
        
    }
}

// Chamando a função assíncrona para buscar um usuário pelo ID
buscarUsuarioPeloID(1);
    


