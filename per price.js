// যদি কোন সময় এক বা একাধিক কোন কিছুর দাম akstha dekhar  drkr hy thle
// dhori 1 shirt kinte  hbe  , 2 ta shocks kinte hbe , 3 ta shoes lagbe , 5 ta bed lagbe
// `1st of all i need to declear the price of each items
// the all items total the show

function perPrice(
    shirtQuantity,
    shocksQuantity,
    bedQuantity,
    pantQuantity,
    shoesQuantity
    ) {
    const perShirtPrice = 800;
    const perShocksPrice = 200;
    const perBedPrice = 56000;
    const perPantPrice = 1500;
    const perShoesPrice = 2000;

    const shirtPrice = perShirtPrice * shirtQuantity;
    const shocksPrice = perShocksPrice * shocksQuantity;
    const bedPrice = perBedPrice * bedQuantity;
    const pantPrice = perPantPrice * pantQuantity;
    const ShoesPrice = perShoesPrice * shoesQuantity;

    const totalAmountOfShoping = shirtPrice + shocksPrice + bedPrice + pantPrice + ShoesPrice;

    return totalAmountOfShoping;
}

const amountOfItems = perPrice(1,2,1,2,2) // we can dealer also an objects
console.log(amountOfItems);