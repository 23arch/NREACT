//Für jede Zahl von 1 bis 30 gib aus, wie viele Teiler sie hat.
let count = 0;

for (i = 1; i <= 30; i++) {

    for (a = 1; a <= 30; a++) {
        if (i % a === 0) {
            count += 1
        }
    }
}

console.log(count)