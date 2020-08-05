const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 100);
})

const promise2 = promise1.then(function (result) {
    console.log(result); // 1
    return result + 1;
})

const promise3 = promise2.then(function (result) {
    console.log(result);
    return result + 1;
})

promise3.then(function (result) {
    console.log(result);
});