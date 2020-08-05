const Rx = require("rxjs")

// Sync
let obs$ = new Rx.Observable((observable) => {
    console.log("start to count?");
    observable.next();
});

obs$.subscribe(() => {
    console.log("1");
})

console.log("2");


console.log("=============");

// Async
obs$ = new Rx.Observable((observable) => {
    console.log("start to count?");
    setTimeout(() => {
        observable.next();
    }, 0);
});

obs$.subscribe(() => {
    console.log("1");
})

console.log("2");