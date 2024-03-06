const fs = require('fs');

// Lendo uma pasta
fs.readdir('C:/Users/robson/Desktop/tiktok-live-times-futebol', (err, files) => {
  if (err) {
    console.error('Erro ao ler a pasta:', err);
    return;
  }
  console.log('Arquivos na pasta:', files);
});

// Lendo um arquivo
/*fs.readFile('C:/Users/robson/Desktop/senhatibia.txt','utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }
  console.log('Conteúdo do arquivo:', data);
});*/