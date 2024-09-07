//  discounted price in js shopping mall

function discountedPrice (price){
    if (price <= 100) {
        const discount = price * 100;
        return discount;
    } else if(price <= 200 && price <= 249) {
        const discount =  price * 89
        return discount;
    }
    else{
        const discount = price * 67
        return discount
    }
}

const product = 256
const newValue = discountedPrice(product)
console.log(newValue);