// pacote é um conjunto de 1 ou mais modulos

const operacoesBasicas = require('./operacoesBasicas')
const areas = require('./areas')

module.exports = {
    ...operacoesBasicas,
    ...areas
};