const promise = new Promise((resolve) => {
    console.log("Ida: Hello.");
    resolve();
})

promise.then(() => {
    console.log("Jack: GanXie!!!");
});