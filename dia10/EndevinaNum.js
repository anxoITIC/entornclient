/*Programa que genera un número a l'atzar entre 0 i 100. Pregunta continuament al usuari quin valor és fins que l'endevina. Després li diu els intents que ha necessitat*/
function endevina() {

    //valor generat al atzar
    let numero = Math.floor(Math.random() * 100) + 1;

    //variable que guarda el valor utilitzat per l'usuari
    let numeroUser = parseInt(prompt("Introdueixi un valor"));

    //variable que guarda la quantitat d'intents que ha fet l'usuari
    let intents = 1;

    while (numeroUser != numero) {
        if (numeroUser == 0) {
            alert("Game Over.");
            break;
        }
        if (numeroUser > 100) {
            numeroUser = parseInt(prompt("Valor invàlid. Torni a provar."));
            intents++;
        }

        if (numeroUser > numero && numeroUser <= 100) {
            numeroUser = parseInt(prompt("Incorrecte. El valor a endevinar és més petit que " + numeroUser + ". Torni a provar."));
            intents++;
        }
        if (numeroUser < numero && numeroUser <= 100) {
            numeroUser = parseInt(prompt("Incorrecte. El valor a endevinar és més gran que " + numeroUser + ". Torni a provar."));
            intents++;
        }
    }
    if (numeroUser == numero) {
    alert("Número correcte! Ha necessitat un total de " + intents + " intents.");
    }

}