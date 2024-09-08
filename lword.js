//  lowest word in string using loop

const userName = "Md: Abdullah Al noman";

function lowestStr (userName){
    let words = userName.split(" ");
    let newName = words[0];
    for (let i = 1; i < words.length; i++) {
        if(words[i].length < newName.length){
            newName = words[i]
        }
    }
    return newName;
}
const value = lowestStr(userName)
console.log(value);