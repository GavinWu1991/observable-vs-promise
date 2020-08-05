const promise = new Promise((resolve) => {
    console.log("start to count?");
    resolve();
})

promise.then(() => {
    console.log("1");
});

console.log("2");

