const Rx = require("rxjs")

new Rx.Observable((observable) => {
    console.log("Ida: Hello.");
    observable.next();
});


