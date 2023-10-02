function numProper() {
    let valor1 = parseInt(prompt("Insereix el primer valor"));
    let valor2 = parseInt(prompt("Insereix el segon valor"));

    if (Math.abs(100 - valor1) < Math.abs(100 - valor2)) {
        console.log("El valor més proper a 100 és " + valor1);
        alert("El valor més proper a 100 és " + valor1);
    } else {
        console.log("El valor més proper a 100 és " + valor2);
        alert("El valor més proper a 100 és " + valor2);
    }
}