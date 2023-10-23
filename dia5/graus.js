//funcio que demana la temperatura en celsius i la passa a fahrenheit
function conversor() {
    let grausOriginal = prompt("Introdueix la temperatura en °C o °F, posant C o F després del valor");
    let resultat;
    
    for (int i = 0; i < grausOriginal.length(); i++) {     //recòrrer la variable fins trobar la lletra C o F i saber quin tipus de mesura tenim
        if (grausOriginal.charAt(i) === "C") {
            grausOriginal = grausOriginal.replace(/\D/g, '');   //treu la lletra i deixa només els digits, per poder realitzar la operació matemàtica
            resultat = ((9/5)*grausOriginal+32);
            alert(resultat);
        }

        if (grausOriginal.charAt(i) === "F") {
            grausOriginal = grausOriginal.replace(/\D/g, '');
            resultat = ((grausOriginal-32)/(9/5));
            alert(resultat);
        }
    }
}

