const promise = new Promise((resolve) => {
    console.log("who want to join the lunch learn?");
    resolve();
})

promise.then(() => {
    console.log("Jack:I want to join!");
});

console.log("Ida:can I join it?");

