// longest number

function minNumber(number) {
    let x = number[0];
    for (const e of number) {
        if (e < x) {
            x = e ; // number = e (lowest number er jnno)
        }
    }
    return x;
}
const min = [12, 34, 65, 234, 576, 23, 56, 7, 645, 34, 54, 23, 54];
const valueMin = minNumber(min)
console.log(valueMin);


//  highest number
function highestNum(number) {
    let x = number[0];
    for (const e of number) {
        if (e > x) {
            x = e;
        }
    }
    return x;
}

const newValue = [12, 34, 65, 234, 576, 23, 56, 7, 645, 34, 54, 23, 54];
let max = highestNum(newValue)
console.log(max);