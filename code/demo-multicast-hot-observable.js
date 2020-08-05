const Rx = require("rxjs")
const operators = require("rxjs/operators")

let obs$ = new Rx.Observable((observable) => {
    observable.next(new Date().toISOString());
}).pipe(
    operators.publish()
);

obs$.subscribe((date) => {
    console.log("First:" + date);
})

obs$.subscribe((date) => {
    console.log("Second:" + date);
})

obs$.connect();



