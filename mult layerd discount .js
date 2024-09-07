//  multilayer discount how it work is js

function productPrice(items) {
    const first100price = 100;
    const second100price = 90;
    const above200price = 80;

    if ( items <= first100price) {
        const total = items * first100price;
        return total;
    }else if ( items <= 200){
        const first100Total = 100 * first100price; // first 100p product 100 kore
        // const second100total = items * second100price; // second 100p product 90$ kore  
        const remainingQuantity = items - 100;
        const remainingTotal = remainingQuantity * second100price;
        return remainingTotal;
    }else{
        const first100Total = 100 * first100price;
        const second100total = 100 * second100price;
        const remainingQuantity = items - 200;
        const remainingTotal = remainingQuantity * above200price;
        const total =  first100Total + second100total + remainingTotal;
        return total;
}
}

const productItems = 300;
const value = productPrice(productItems)
console.log(value);