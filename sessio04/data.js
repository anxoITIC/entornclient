function demanaData() {
    let hora = parseInt(prompt("Indica l'hora actual"));
    let minut = parseInt(prompt("Indica el minut actual"));
    let segon = parseInt(prompt("Indica el segon actual"));

    let data = new Date();
    data.setHours(hora);
    data.setMinutes(minut);
    data.setSeconds(segon++);

    console.log(data);
}