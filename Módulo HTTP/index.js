//primeiro servidor web com node js

const http = require('http');

http.createServer((request, response) =>{

    response.writeHead(200,{'Content-type':'application/json'}); // o cabeçalho (head) que diz como o navegador vai interpretar a requisiçaõ
    response.end("<h1>Hello-World</h1>");


}).listen(3000, (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Servidor rodando")
    }
})