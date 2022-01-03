let fs = require('fs');

//como escrever algo dentro do arquivo e cria - lo

// função para escrever no arquivo
// contém três argumentos // nome do arquivo, o que escrever no arquivo(variavel ou string ou etc), Callback
// metodo writeFile escreve e modifica o arquivo 

//fs.writeFile('teste.txt', 'Hello World', (error) => { 
//    if(error) throw error;

//    console.log("Arquivo criado com sucesso")

// }) 

//=======================================================================================================================

//fs.appendFile('teste.txt', 'olá mundo', (error) => {  //usando o metodo appendfile que concatena duas "coisas"
  //  if(error) throw error;

  //  console.log("Arquivo atualizado com sucesso")

//}) 

//=======================================================================================================================

//fs.unlink('teste.txt', (error) => {  //usando o metodo unlink para apagar um arquivo
//    if(error) throw error;

//    console.log("Arquivo apagado com sucesso")

// }) 

//=======================================================================================================================


//fs.rename('teste.txt','novoNome.txt', (error) => {  //usando o metodo rename para renomear um arquivo já criado
   // if(error) {throw error};

  //  console.log("Arquivo renomeado com sucesso")

//}) 

//=======================================================================================================================

//fs.readFile('novoNome.txt', 'UTF8', (error, data) => {  //usando o metodo readfile para ler um arquivo, usando o data para ler os dados dos arquivos
 //   if(error) {throw error};

  //  console.log(data)

//}) 
//=======================================================================================================================

let args = process.argv.slice(2);

let fileName = args[0];

fs.readFile(fileName, "UTF8", (error, data) => {
    if (error) {
        throw error
    };

    fs.writeFile(fileName + "_uppercase", data.toUpperCase(), (error)=>{
        if (error) {
            throw error
        };
        console.log("Arquivo gerado com sucesso")
    })

})