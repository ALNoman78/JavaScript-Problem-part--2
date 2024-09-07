//  shoping cart price

const product = [
    { name: "Shampoo", price: 400 },
    { name: "Sop", price: 200 },
    { name: "Conditionar", price: 2400 },
    { name: "Face Power", price: 200 },
    { name: "Suns cream", price: 1400 },
];

function productName(items) {
    // let itemsPrice = items[0];
    let sum = 0;
    for (const e of items) {
        sum += e.price
    }
    return sum;
}

const itemsName = productName(product);
console.log(itemsName);

//  some practice about arr total
// function arr(number) {
//     let sum = 0;
//     for (const e of number) {
//         sum += e;
//     }
//     return sum;
// }
// const newArr = [10,30,405,23,32,23,23,]
// const value = arr(newArr)
// console.log(value);
