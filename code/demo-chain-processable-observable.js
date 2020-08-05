const Rx = require("rxjs")
const operators = require("rxjs/operators")

const obs$ = Rx.of(1);
const result = obs$.pipe(
    operators.mergeMap(() => Rx.interval(1)
        .pipe(operators.map(num => num + 1))),
    operators.take(3)
);

result.subscribe(x => console.log(x));


