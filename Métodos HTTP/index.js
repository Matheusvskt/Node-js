//primeiro servidor web com node js

const http = require('http');
const url = require('url');
const fs = require('fs');

function handleFile(req, res, callback) {
    let path = (url.parse(req.url).pathname);
    if (path == "" || path == "/") {
        path = "/index.html"
    }

    let fileName = "." + path;

    fs.readFile(fileName, (error, data) => {
        if (error) {

            if (callback) {
                if (!callback(req, res)) {
                    res.writeHead(484, {
                        "Content-Type": "text/html;charset=utf-8"
                    });
                    res.end("Página não encontrada")

                }
            }

            if (path == "/teste") {
                res.end("teste")
                return;
            }

        } else {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.write(data);
            res.end();

        }
    })
}

function handleRequest(req, res) {
    let path = (url.parse(req.url).pathname);

    let method = req.method;
    console.log(method)
    
    if (path == "/teste") {
        res.end("teste")
        return true;
    }
    return false;
}



http.createServer((request, response) => {

    handleFile(request, response, handleRequest);


}).listen(3000, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Servidor rodando na porta 3000")
    }
})