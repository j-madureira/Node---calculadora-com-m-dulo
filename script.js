let calc = require("./app-calc");

let args = process.argv.slice(2);

let a = Number(args[0]);
let b = '';
let c = Number(args[2]);

if(args[1] == 's'){
    b = calc.soma(a,c);
}
else if(args[1] == 'sb'){
    b = calc.sub(a,c);
}
else if(args[1] == 'd'){
    b = calc.div(a,c);
}
else if(args[1] == 'm'){
    b = calc.mult(a,c);
}

console.log(b);