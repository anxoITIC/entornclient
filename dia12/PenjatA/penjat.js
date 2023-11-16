function Penjat() {
    let partidesGuanyades = 0;
    let partidesJugades = 0;
    let partidesPerdudes = 0;

    SeleccioMode(partidesGuanyades, partidesJugades, partidesPerdudes);
}

function SeleccioMode(partidesGuanyades, partidesJugades, partidesPerdudes) {
    console.log("1. Iniciar una partida");
    console.log("2. Estadístiques");

    let seleccio =  prompt("Seleccioni una opció");

    //selecció de mode
    if (seleccio == 1) {
        partida(partidesGuanyades, partidesJugades, partidesPerdudes);
        partidesJugades++;
    } else if (seleccio == 2) {
        Estadistiques(partidesGuanyades, partidesJugades, partidesPerdudes);
    }
}

function partida(partidesGuanyades, partidesJugades, partidesPerdudes) {
    var wordToGuess = prompt("Introdueix una paraula:").toLowerCase(); //demana una paraula i la processa

    
    if (!/^[a-z]+$/.test(wordToGuess)) {    //comprovació de si la paraula és vàlida
        console.log("Paraula invàlida. Siusplau, introdueix una altra paraula");
        partida(); 
        return;
    }

    var guessedWord = "_".repeat(wordToGuess.length);   //mostrar la paraula convertida a guions baixos

    console.log("Endevina la paraula: " + guessedWord);

    playGame(wordToGuess, guessedWord, partidesGuanyades, partidesJugades, partidesPerdudes);

}

function playGame(wordToGuess, guessedWord, partidesGuanyades, partidesJugades, partidesPerdudes) {
    var maxAttempts = 6; 
    var incorrectAttempts = 0;
    var lletresIncorrectes = "";
    
    while (guessedWord !== wordToGuess && incorrectAttempts < maxAttempts) {
        var guess = prompt("Introdueix una lletra:").toLowerCase();
        
        if (guess.length !== 1 || !/[a-z]/.test(guess)) {
            console.log("Paraula invàlida. Siusplau escriu una diferent");
            continue;
        }
        
        if (wordToGuess.includes(guess)) {
            console.log("Correcte!");
            console.log("Lletres incorrectes: " + lletresIncorrectes);
            
            
            for (var i = 0; i < wordToGuess.length; i++) {
                if (wordToGuess[i] === guess) {
                    guessedWord = guessedWord.substring(0, i) + guess + guessedWord.substring(i + 1);
                }
            }
        } else {
            console.log("Lletra incorrecta, torna-ho a intentar.");
            incorrectAttempts++;
            lletresIncorrectes = lletresIncorrectes + guess + ", ";
            console.log("Lletres incorrectes: " + lletresIncorrectes);
        }
        
        console.log(guessedWord);
        console.log(incorrectAttempts + "/6 errors");
    }

    // Comprovació dels resultats
    if (guessedWord === wordToGuess) {
        console.log("Enhorabona! Has endevinat la paraula: " + wordToGuess);
        partidesGuanyades++;
        SeleccioMode(partidesGuanyades, partidesJugades, partidesPerdudes);
    } else {
        console.log("GAME OVER");
        partidesPerdudes++;
        SeleccioMode(partidesGuanyades, partidesJugades, partidesPerdudes);
    }
}


function Estadistiques(partidesGuanyades, partidesJugades, partidesPerdudes) {
    console.log("ESTADÍSTIQUES");

    //mostrem totes les estadístiques
    console.log("Total de partides: " + partidesJugades);
    console.log("Partides guanyades: " + partidesGuanyades);
    console.log("Partides perdudes: " + partidesPerdudes);

    SeleccioMode(); //un cop mostrades les dades es torna al menú de selecció per no encallar-se en la part d'estadístiques

}
