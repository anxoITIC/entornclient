function detectaArxiu() {

    let arxiu = prompt("Introdueixi l'arxiu");

    let arxiuSeparat = arxiu.split('.');

    let format = arxiuSeparat[1];
    
    alert("L'arxiu està en format " + format);
}