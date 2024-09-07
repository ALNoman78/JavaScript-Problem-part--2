// increment js

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function productPrice (products){
    let sum = 0;
    for (const e of products) {
        // console.log(e);
        let thisItemsIncrement = e.starting + e.increment;
        sum += thisItemsIncrement;
    }
    return sum;
}
const productItems = productPrice(employees)
console.log("Increment with salary is = ", productItems);