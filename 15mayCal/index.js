const crypto = require('crypto');

// Functions to add,subtract,delete & divide two numbers.
const add = (a,b) => a+b;
const sub = (a,b) => a-b;
const mult = (a,b) => a*b;
const division = (a,b) => {
    if(b==0){
        throw new Error('division by 0 is not allowed')
    }
    return a/b;
}

// Functions to calculate sine, cosine & tangent of a number.
const sin = (x) => Math.sin(x);
const cos = (x) => Math.cos(x);
const tan = (x) => Math.tan(x);

// Function to generate random number.
const random = (length) => {
    if(!length){
        console.log('provide length for random number generation');
        process.exit(1);
    }
    return crypto.randomBytes(Number(length)).toString('binary');
}





const[, ,command,...args] = process.argv;

try{
    let result;
    switch(command){
        case 'add': 
            result  = add(Number(args[0]),Number(args[1]));
            break;
        case 'sub':
            result  = sub(Number(args[0]),Number(args[1]));
            break;
        case 'mult':
            result  = mult(Number(args[0]),Number(args[1]));
            break;
        case 'division':
            result  = division(Number(args[0]),Number(args[1]));
            break;
        case 'sin':
            result  = sin(Number(args[0]));
            break;
        case 'cos':
            result  = cos(Number(args[0]));
            break;
        case 'tan':
            result  = tan(Number(args[0]));
            break;
        case 'random':
            result  = random(args[0]);
            break;
        default : 
                console.log('command not found');
                process.exit(1);
    }
    console.log(result);
}catch(err){
    console.log(err.message);
    process.exit(1);
}
