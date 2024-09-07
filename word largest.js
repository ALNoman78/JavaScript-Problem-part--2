//  find the largest word form the string

const userName = "Md Abdullah Al noman";

function largestWord (word){
    let wor = word.split(" ");
    let arr = '';
    for (let i = 0; i < wor.length; i++) {
        if (wor[i].length > arr.length) {
            arr = wor[i]
        }
    }
    return arr;
}
const newName = largestWord(userName);
console.log(newName);