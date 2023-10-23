function creaTaula() {
    let files = parseInt(prompt("Número de files?"));
    let columnes = parseInt(prompt("Número de columnes?"));

    let taula = document.createElement("table");
    let tbody = document.createElement("tbody");

    for (let x = 0; x < files; x++) {
        let fila = document.createElement("tr");
        for (let y = 0; y < columnes; y++) {
            let celda = document.createElement("td");
            celda.textContent = "texto";
            fila.appendChild(celda);
        }
        tbody.appendChild(fila);
    }
    
    taula.appendChild(tbody);
    document.body.appendChild(taula);
}


function multiplicador() {
    let files = parseInt(prompt("Files?"));
    let columnes = parseInt(prompt("Columnes?"));
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");

    for(let i = 0; i < files; i++) {
        let tr = document.createElement("tr");

        for (let e = 0; e < columnes; e++) {
            let td = document.createElement("td");
            let txt = document.createTextNode(i*e);

            td.appendChild(txt);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.body.appendChild(table);
}