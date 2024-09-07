//  find the tallest man is the class room using loop

const heights = [65, 35, 76, 56, 45, 34, 2, 37, 87, 45, 23, 23];

function tallestNumber (numbers){
    let arr = '';
    for(let i = 0; i < numbers.length ; i++){
        if (numbers[i] > arr) {
            arr = numbers[i]
        }
    }
    return arr ;
}   
const value = tallestNumber(heights)
console.log(value);
