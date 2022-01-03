const sharp = require('sharp')
let path = process.argv[2];
let width = Number(process.argv[3]);

console.log(path, width)

function resize(path, width){

sharp(path).resize({width: width}).toFile('./temps/output_resize.jpg',(erro)=>{
    if(erro){
        console.log(erro);
    }else{
        console.log('imagem redimensionada com sucesso')
    }
})

}

resize(path, width);