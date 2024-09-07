//Your task is to calculate the total budget required to buy electronics:

function productPrice(laptopQuantity , tabletQuantity , mobileQuantity) {
    const perLaptopPrice = 35000;
    const perTabletPrice = 15000;
    const perMobilePrice = 20000;

    const laptopPrice = perLaptopPrice * laptopQuantity;
    const tabletPrice = perTabletPrice * tabletQuantity;
    const mobilePrice = perMobilePrice * mobileQuantity;

    const totalPrice = laptopPrice + tabletPrice + mobilePrice;

    return totalPrice;
}

const priceAmount = productPrice(0,0,1)
console.log(priceAmount);