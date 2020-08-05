const Rx = require("rxjs")

let obs$ = new Rx.Observable((observable) => {
    observable.next(new Date().toISOString());
});

obs$.subscribe((date) => {
    console.log("First:" + date);
})

obs$.subscribe((date) => {
    console.log("Second:" + date);
})