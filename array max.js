// find max number form array

function largestNumber(number) {
    let x = Math.max(...number)
    return x;
}

const arr = [12, 34, 65, 234, 576, 23, 56, 7, 645, 34, 54, 23, 54];
const value = largestNumber(arr)
console.log(value);
