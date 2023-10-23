function piramide() {
    let files = parseInt(prompt("Quantes files?"));
    let columnes = (files/2) + 1;

    let taula = document.createElement("table");
    let tbody = document.createElement("tbody");

    for (let i = 0; i < columnes; i++) {
        let columna = document.createElement("td");
        for (let x = 0; x < files; x++) {
            let celda = document.createElement("td");
            celda.
            fila.appendChild(celda);
        }
        tbody.appendChild(fila);
    }
    taula.appendChild(tbody);
    document.body.appendChild(taula);
}
    
