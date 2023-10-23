function analitza() {
    let textOriginal = prompt("Escriu un text");

    //mostrar el text en majúscules i després en majúscules
    document.write(`1. Majúscules: ${textOriginal.toUpperCase()}<br><br>`);
    document.write(`2.Minúscules: ${textOriginal.toLowerCase()}<br><br>`);

    //mostrar la llargada de la frase
    document.write(`3.Llargada: ${textOriginal.length}<br><br>`);

    //mostrar la quantitat d eparaules que hi han en el text
    const paraules = textOriginal.split(" ");
    document.write(`4.Quantitat de paraules: ${paraules.length}<br><br>`);

    //mostrar totes les lletres del text que siguin vocals
    let vocals = "";
    let vocales = "aàèeéíïioòúüu";
    let caracter = textOriginal.charAt(i).toLowerCase();
    for (let i = 0; i <= textOriginal; i++) {
        if (caracter.includes(vocales)) {
            vocals += caracter;
        }
    }
    document.write(`5.Vocals en el text: ${vocals}<br><br>`);

    //mostrar la quantitat de vocals que hi ha en el text
    document.write(`6.Quantitat de vocals: ${vocals.length}<br><br>`)

    //mostrar el text reduïnt-se per la primera i l'última lletra fins que es queda sense caràcters
    document.write(`7.El text reduïnt-se: <br>`);
    let textEsborrat = "";
    for (let i = 0; i <= textOriginal.length; i++) {
        textEsborrat = textOriginal.substr(i);
        document.write(`${textEsborrat}`);
    }


}


