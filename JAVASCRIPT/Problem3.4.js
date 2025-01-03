function myFun(lst){
    let mean = 0;
    for (let i = 0; i < lst.length; i++) {
        mean += lst[i];
    }
    return mean/5;
}

let result = myFun([1,2,3,4,5])

console.log(result);