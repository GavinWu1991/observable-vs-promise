const Rx = require("rxjs")

const obs$ = Rx.of(1, 2, 3)

obs$.subscribe((num) => {
    console.log(num);
})




