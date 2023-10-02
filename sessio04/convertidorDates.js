function convertidor() {
    let diesTotals = parseInt(prompt("Introdueix quants dies"));

    let anys = 0;
    let mesos = 0;
    let dies = 0;

    while (diesTotals <= 365) {
        anys++;
        diesTotals = diesTotals - 365;
    }

    while (diesTotals <= 30) {
        mesos++;
        diesTotals = diesTotals - 30;
    }

    dies = diesTotals;

    console.log(anys);
    console.log(mesos);
    console.log(dies);
    
}