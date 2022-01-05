//primeiro servidor web com node js

const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((request, response) =>{

    let path = (url.parse(request.url).pathname);
    if(path == "" || path == "/"){
    path = "/index.html"
    }

    let fileName = "." + path;

    fs.readFile(fileName,(error, data)=>{
        if(error){
            response.writeHead(484,{"Content-Type":"text/html;charset=utf-8"});
            response.end("Página não encontrada")
        }else{
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(data); 
            response.end();

        }
    })
   
}).listen(3000, (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Servidor rodando na porta 3000")
    }
})