// Gib die Zahlen von 1 bis 50 aus. Wenn eine Zahl durch 5 teilbar ist, gib statt der Zahl "Divisible by 5" aus

for (i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log("Divisible by 5")
    } else {
        console.log(i)
    }

}