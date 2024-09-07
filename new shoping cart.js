//  shopping cart in js , price + quantity = total price need to show server using function

const product = [
    { name: "Shampoo", price: 400 , quantity : 2,},
    { name: "Sop", price: 200 , quantity : 3,},
    { name: "Conditionar", price: 2400 , quantity : 4,},
    { name: "Face Power", price: 200 , quantity : 5,},
    { name: "Suns cream", price: 1400, quantity : 1,},
];

function productPrice (items){
    let sum = 0;
    for (const item of items) {
        let totalPrice = item.price * item.quantity;
        sum += totalPrice;
    }
    return sum;
}
const itemPrice = productPrice(product)
console.log(itemPrice);