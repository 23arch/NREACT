//Gehe alle Zahlen von 1 bis 50 durch und zähle, wie viele davon durch 7 teilbar sind.
let count = 0;

for (i = 1; i <= 50; i++) {
    if (i % 7 === 0) {
        count += 1
    }
}
console.log(count) // Wenn man will, dass jeder Count ausgegeben wird, einfach count in die for-Schleife