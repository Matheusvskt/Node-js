const sharp = require('sharp')
const compress_images = require('compress-images');

let path = process.argv[2];
let width = Number(process.argv[3]);

console.log(path, width)

function resize(inputPath, outPutPath, width){

sharp(inputPath).resize({width: width}).toFile( outPutPath,(erro)=>{
    if(erro){
        console.log(erro);
    }else{
        console.log('imagem redimensionada com sucesso')
    }
})

}
function compress(pathInput, outPutPath){

}
resize(path,'./temps/output_resize.jpg', width);