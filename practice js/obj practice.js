const mobile = [
    {phone : "Samsung" , price : 900000, model : "galaxy A54 5G", category: "A" },
    {phone : "Apple" , price : 5000, model : "Iphone xs max", category: "A" },
    {phone : "Xiaomi" , price : 12000, model : "x 12", category: "A" },
    {phone : "Oppo" , price : 8000, model : "Oppo A12", category: "A" },
    {phone : "Walton" , price : 7000, model : "Primo N78", category: "A" },
    {phone : "Blue Berry" , price : 1000, model : "9 lite", category: "A" },
    {phone : "Bolod" , price : 6700, model : "5G", category: "A" },
    {phone : "Techno" , price : 2000, model : "non", category: "A" }
]


function newMobile(phones) {
    let maxPrice = phones[0];
    for (const e of phones) {
        if (e.price > maxPrice.price) { // object.key call korte hbe
            maxPrice = e;
        }
    }
    return maxPrice;
}

const phones = newMobile(mobile);
console.log(phones);