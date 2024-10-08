// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.



const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];


function cheapMobile(mobile) {
    let minMobile = mobile[0]
    for (const e of mobile) {
        if (e.price > minMobile.price) {
            minMobile = e;
        }
    }
    return minMobile;
}
const valueMobile = cheapMobile(phones)
console.log(valueMobile);