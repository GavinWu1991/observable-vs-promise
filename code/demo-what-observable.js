const Rx = require("rxjs")

const obs$ = new Rx.Observable((observable) => {
    console.log("Ida: Hello.");
    observable.next();
});

obs$.subscribe(() => {
    console.log("Jack: GanXie!!!");
});



