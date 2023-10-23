function esborra() {
    let text = prompt("Escriu un text");
    let posicio = parseInt(prompt("Escriu un número"));

    while (text.lenght < posicio) {
        posicio = parseInt(prompt("Error. El valor introduït és més gran que el text, escriu un valor igual o inferior a la llargada del text"));
    }

    text = text.substr(posicio);

    alert(text);
}