//Berechne die Summe aller Zahlen von 1 bis 30, aber überspringe alle Vielfachen von 5.
let sum = 0;

for (i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
        sum = i;
        console.log(sum)
    }
}

