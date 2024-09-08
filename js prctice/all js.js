// maximum number is js

const userName = "Md: Abdullah Al Noman";

function largestNumber(name) {
    let words = name.split(" ");
    let x = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > x.length) {
        x = words[i];
        }
    }
    return x;
}
const newValue = largestNumber(userName);
console.log(newValue);

// shortest number in string using for loop

function shortestName(name) {
    let short = name.split(" ");
    let x = short[0];
    for (let i = 1; i < short.length; i++) {
        if (short[i].length < x.length) {
        x = short[i];
        }
    }
    return x;
}
const shortName = shortestName(userName);
console.log(shortName);

//  find the largest number using for of loop

let arr = [12, 32, 43, 23, 65, 87, 56, 34, 7];

function largestNumber(number) {
    let num = number[0]
    for (const e of number) {
        if (e > num) {
            num = e;
        }
    }
    return num;
}

const  newArr = largestNumber(arr)
console.log(newArr);


// minimum number using for loop

function minNumber(number) {
    let num = number[0];
    for (const e of number) {
        if (e < num) {
            num = e;
        }
    }
    return num;
}
const numberMin = minNumber(arr)
console.log(numberMin);


//  using math method

function maxMath(number) {
    let x = Math.max(...number)
    return x;
}
const maxNumber = maxMath(arr)
console.log(maxNumber);

// min number using math method

function minNum(num) {
    let x = Math.min(...num)
    return x;
}
const lowestNumber = minNum(arr)
console.log(lowestNumber);


//object max number

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];


function maxPrice (number){
    let mxPrice = number[0];
    for (const e of number) {
        if (e.price > mxPrice.price) {
            mxPrice = e // ekhne price ashbe nah mxprice er price ashbe nh
        }
    }
    return mxPrice.price;
}
const maxObjValue = maxPrice(phones)
console.log(maxObjValue);


// minimum price in object 

function mnPhone(number) {
    let min = number[0];
    for (const e of number) {
        if (e.price < min.price) {
            min = e // mn theke sudu minimum number ashbe object er price er number ashbe kintu object ashbe nah 
        }
    }
    return min.price;
}
const minPhonePrice = mnPhone(phones)
console.log(minPhonePrice);


// discount section

function discountPrice(price) {
    if (price <= 100) {
        const discount = price * 100 // no discount available 
        return discount;
    } else if (price <= 200){
        const discount = price * 90 // 10% cash of on all product 
        return discount;
    }else{
        const discount = price * 80
        return discount;
    }
}
const productAmount = 201;
const items = discountPrice(productAmount)
console.log("The price after discount = ", items); 


// shopping cart price

const product = [
    { name: "Shampoo", price: 400 , quantity : 1},
    { name: "Sop", price: 200 , quantity : 3},
    { name: "Conditioner", price: 2400, quantity : 2 },
    { name: "Face Power", price: 200 , quantity : 4},
    { name: "Suns cream", price: 1400 , quantity : 5},
];


function productItems(items) {
    let sum = 0;
    for (const e of items) {
        let items = e.price * e.quantity;
        sum += items;
    }
    return sum;
}

const productTeam = productItems(product);
console.log("Product total price and quantity price = ",productTeam);

//