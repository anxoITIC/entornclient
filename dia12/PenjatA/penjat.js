function Penjat() {
    console.log("1. Iniciar una partida");
    console.log("2. Estadístiques");
    console.log("3. Sortir del joc");

    let seleccio =  prompt("Seleccioni una opció");

    if (seleccio == 1) {
        Partida();
    } else if (seleccio == 2) {
        Estadistiques();
    } else if (seleccio == 3) {
        Sortir();
    }
}

function Partida() {

    let paraula = prompt("Introdueix una paraula");

    let lletresRestants = paraula.length;
    const 

    let guions = "_";
    while (lletresRestants > 0) {
        console.log(guions.repeat(lletresRestants));
        lletresRestants = lletresRestants - 1;
    }
}


function Estadistiques() {

}


function Sortir() {

}