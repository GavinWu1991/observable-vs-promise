const Rx = require("rxjs")

const obs$ = Rx.of(console.log("who want to join the lunch learn?"))

obs$.subscribe(() => {
    console.log("Jack:I want to join!");
})

console.log("Ida:can I join it?");



