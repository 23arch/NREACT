//Für jede Zahl von 1 bis 30 gib aus, wie viele Teiler sie hat.


for (i = 1; i <= 30; i++) {
    let count = 0;
    for (a = 1; a <= 30; a++) {
        if (i % a === 0) {
            count += 1;
        }
    }
    console.log(i, count);
}