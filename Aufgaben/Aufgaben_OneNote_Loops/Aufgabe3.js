// FizzBuzz-Variante
// Erstelle eine Schleife, die Zahlen von 1 bis 50 durchläuft und:
// "Fizz" ausgibt, wenn die Zahl durch 3 teilbar ist,
// "Buzz" ausgibt, wenn die Zahl durch 5 teilbar ist,
// "FizzBuzz" ausgibt, wenn sie durch 3 und 5 teilbar ist,
// ansonsten die Zahl selbst ausgibt.

for (let i = 0; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log("Fizz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }
    else {
        console.log(i)
    }
}