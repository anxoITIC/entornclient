function pentavocalica() {
    let palabra = prompt("Introduce una palabra:");
    let palabraMinusculas = palabra.toLowerCase();
    return (
        palabraMinusculas.includes('a') &&
        palabraMinusculas.includes('e') &&
        palabraMinusculas.includes('i') &&
        palabraMinusculas.includes('o') &&
        palabraMinusculas.includes('u'));}
if (pentavocalica()) {console.log("La palabra es pentavocálica.");} else {console.log("La palabra no es pentavocálica.");}
