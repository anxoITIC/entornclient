function demanaNumero() {
    let valor = prompt("Introdueix un número");
    console.log("Taula del " + valor + ":");
    for (var x = 1; x <= 10; x++) {
        console.log(`${valor} x ${x} = ${valor * x}`);
    }
}

function fibonacci() {
    let valor = document.getElementById("valor").value;
    let a = 1;
    let b = 1;
    let suma = a + b;
    for(i = 1; i <= valor; i++) {
        console.log(`Fibo[${i}] = ${b}`);
        suma = a;
        a = a + b;
        b = suma;

    }

}