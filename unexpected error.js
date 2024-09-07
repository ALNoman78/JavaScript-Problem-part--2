// which type of function error will problem me as a jr developer

function number (num1 , num2){
    if (typeof num1 !== 'number') {
        return "Please enter the valid number "
    } else if( typeof num2 !== "number"){
        return "Please enter the second value of number "
    }
    const result = num1 * num2;
    return result;
}
const value = number("3",5)
console.log(value);


//  if i use this method in object , let's try

function objectName(params) {
    if (typeof params !== "object") {
        return "Please provide a object"
    }
    // else if( typeof params !== o) {
        
    // }
    let x = params.price
    return x;
}
// const obj = objectName({name : "Racket", age : 21, price : 45, color:"green" })
const obj = objectName(3)
console.log(obj);


//  array error

function arr(arrayName) {
    if (Array.isArray(arrayName) !== "array") {
        return "This is not array you want to become a fool";
    }
    let x = arrayName;
    return x;
}
// const newData = arr([1,3,4,5])
const newData = arr({name : "moule", age : 21,})
console.log(newData);