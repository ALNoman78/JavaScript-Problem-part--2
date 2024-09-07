//  using for of loop 

function getMax(number){
    let max = number[0]
    for (const e of number) {
        if (e > max) {  
            max = e
        }
    }
    return max;
}

const arr = [12, 34, 65, 234, 576, 23, 56, 7, 645, 34, 54, 23, 54];
const value = getMax(arr)
console.log(value);



// lowest number () using for of loop

function minNumber (number){
    let num = number[0];
    for (const e of number) {
        if (e < num) {
            num = e;
        }
    }
    return num;
}

const min = [12, 34, 65, 234, 576, 23, 56, 7, 645, 34, 54, 23, 54];
const valueMin = minNumber(min)
console.log(valueMin);