function comparaLlargada() {
    let frase1 = prompt("Escriu la primera frase:");
    let frase2 = prompt("Escriu la segona frase:");

    let llargadaFrase1 = frase1.length;
    let llargadaFrase2 = frase2.length;

    if (llargadaFrase1 == llargadaFrase2) {
        alert("La llargada de les dues frases és la mateixa.");
    } else if (llargadaFrase1 > llargadaFrase2) {
        alert("La llargada de les dues frases no és la mateixa. La primera frase és més llarga.");
    } else {
        alert("La llargada de les dues frases no és la mateixa. La segona frase és més llarga.");
    }

}