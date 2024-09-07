//

function priceItems(
    shirtQuantity,
    lightQuantity,
    mobileQuantity,
    riceQuantity,
    selfQuantity,
    pantQuantity,
    earphoneQuantity
) {
    const perShirtPrice = 900;
    const perLightPrice = 400;
    const perMobilePrice = 40000;
    const perRicePrice = 1600;
    const perSelfPrice = 1000;
    const perPantPrice = 2000;
    const perEarphonePrice = 3000;

    const shirtPrice = perShirtPrice * shirtQuantity;
    const lightPrice = perLightPrice * lightQuantity;
    const mobilePrice = perMobilePrice * mobileQuantity;
    const ricePrice = perRicePrice * riceQuantity;
    const selfPrice = perSelfPrice * selfQuantity;
    const pantPrice = perPantPrice * pantQuantity;
    const earPhonePrice = perEarphonePrice * earphoneQuantity;

    const subTotalItemsPrice = shirtPrice + lightPrice + mobilePrice + ricePrice + selfPrice + pantPrice + earPhonePrice;

    return subTotalItemsPrice;
}

const price = priceItems(0,0,0,0,0,0, 120)
console.log(price);