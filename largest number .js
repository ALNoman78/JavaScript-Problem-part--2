//  find the largest number form array

function largestNumber(number) {
    let x = Math.max(...number);
    return x;
}
const newNumber = [1, 3, 5, 7, 8, 10, 24, 46, 54];
const value = largestNumber(newNumber);
console.log(value);
