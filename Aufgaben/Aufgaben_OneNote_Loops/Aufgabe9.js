//Gib für Zahlen von 1 bis 100 "Boom" aus, wenn sie auf 0 enden (n % 10 === 0), ansonsten die Zahl selbst.

for (let i = 0; i <= 100; i++) {
    if (i % 10 === 0) {
        console.log("Boom");
    }
    else {
        console.log(i);

    }
}