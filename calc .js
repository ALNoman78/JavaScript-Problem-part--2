//  create a calculator using js

function add(num1, num2) {
    return num1 + num2;
}
function subs(num1, num2) {
    return num1 - num2;
}
function devi(num1, num2) {
    return num1 - num2;
}
function multi(num1, num2) {
    return num1 * num2;
}


function  calculator(a , b , operation) {
    if(operation === "add"){
        const result = add(a , b);
        return result;
    }else if( operation === "devi"){
        const result = devi(a , b)
        return result;
    }else if(operation === "subs"){
        const result = subs(a , b);
        return result;
    }else if (operation === "multi") {
        const result = multi(a, b)
        return result;
    }else{
        return "'add' 'devi' 'subs' 'multi' operation are allowed to run this code"
    }
}

const value = calculator(4 , 3 , 'add');
console.log(value);
// const value2 = calculator(4 , 3 , 'subs');
// console.log(value2);