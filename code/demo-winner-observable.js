const Rx = require("rxjs")

const obs$ = new Rx.Observable((observable) => {
    console.log("who want to join the lunch learn?");
    observable.next();
});

obs$.subscribe(() => {
    console.log("Jack:I want to join!");
})

console.log("Ida:can I join it?");



