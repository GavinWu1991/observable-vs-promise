let promise = new Promise((resolve) => {
    resolve(1);
    resolve(2);
    resolve(3);
})

promise.then((num) => {
    console.log(num);
});