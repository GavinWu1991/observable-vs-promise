const Rx = require("rxjs")

const obs$ = Rx.of(console.log("Ida: Hello."))

obs$.subscribe(() => {
    console.log("Jack: Ganxie!!!");
});



