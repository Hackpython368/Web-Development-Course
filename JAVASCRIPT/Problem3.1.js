let obj = {
    harry:98,
    rohan:70,
    aakash:7
}

let keysArray = Object.keys(obj);

for (let i = 0; i < keysArray.length; i++) {
    console.log("Marks of ",keysArray[i]," is ",obj[keysArray[i]]);
}