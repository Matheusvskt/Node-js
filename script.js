let calc = require("./calc")
let args = process.argv.slice(2)

console.log(process.argv)

var a = Number(args[1]);
var b = Number(args[2]);
var c = "";

if(args[0] == 's'){
    c = calc.soma(a, b)
}else if(args[0] == 'm'){
    c = calc.mult(a, b)
}else{
    c = "Ops, há algo de errado"
}



console.log(c)