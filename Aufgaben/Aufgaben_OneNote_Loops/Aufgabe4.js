//Schreibe eine Schleife, die alle Primzahlen zwischen 2 und 50 ausgibt. Eine Primzahl ist nur durch 1 und sich selbst teilbar.

for (i = 2; i <= 50; i++) {
    let j;
    for (j = 2; j < i; j++) {
        if (i % j === 0) {
            break; //Abbruch
        }
    }
    if (j === i) {
        console.log(i);
    }
}
