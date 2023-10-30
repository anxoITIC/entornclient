function informeData() {

    const data = new Date();

    //aconseguim les dades bàsiques
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let any = data.getFullYear();

    //mètode per saber la setmana actual
    let avui = + new Date(data.getFullYear(), data.getMonth(), data.getDate());
    let iniciAny = + new Date(data.getFullYear(), 0, 1);
    let diaDelAny = ((avui - iniciAny + 1) / 86400000);
    let setmanaActual = Math.ceil(diaDelAny / 7);

    //mètode per saber el percentatge de dies transcorreguts en l'any
    let diesTotals = setmanaActual * 7;
    let percentatgeDies = ((diesTotals / 364) * 100);

    //mètode per saber el percentatge de dies que queden de l'any
    let diesRestants = 364 - diesTotals;
    let percentatgeDiesRestants = ((diesRestants / 364) * 100);

    //mètode per saber la hora exacta del dia
    let hora = data.getHours();
    let minut = data.getMinutes();
    let segon = data.getSeconds();

    //mètode per calcular el percentatge de dia transcorregut
    let segonsTranscorreguts = ((hora * 60) * 60) + (minut * 60) + segon;
    let percentatgeSegons = ((segonsTranscorreguts * 100) / (60 * 60 * 24));

    //metode per calcular el percentatge de dia restant
    let segonsRestants = (60 * 60 * 24) - segonsTranscorreguts;
    let percentatgeSegonsRestants = ((segonsRestants * 100) / (60 * 60 * 24));


    //mostrar els resultats
    console.log("**************************");
    console.log("** INFORME DE LES DATES **");
    console.log("**************************");
    console.log("1) Avui és " + dia + " del mes " + mes + " de l'any " + any);
    console.log("2) Aquesta és la setmana número " + setmanaActual + " de l'any");
    console.log("3) El percentatge de dies transcorreguts aquest any és el " + percentatgeDies.toFixed(2) + "%"); //toFixed defineix la quantita de decimals que vols mostrar d'un valor
    console.log("4) El percentatge de dies que queden per finalitzar l'any és el " + percentatgeDiesRestants.toFixed(2) + "%");
    console.log("5) Ara mateix són les " + hora + ":" + minut + ":" + segon);
    console.log("6) El percentatge de segons transcorreguts el dia d'avui és el " + percentatgeSegons.toFixed(2) + "%");
    console.log("7) El percentatge de segons transcorreguts el dia d'avui és el " + percentatgeSegonsRestants.toFixed(2) + "%");

}


function informeBarres() {
    let codi = prompt("Introdueixi un codi de barres");

    if(codi.length() < 8) {     //si codi té menys de 8 números, se li afegeixen zeros fins que arribi a 8
        while (codi.length() < 8) {
            codi = codi + 0;
        }
    } else if (codi.length() > 13) {        //si té més de 13 números, es resten fins arribar a 13
        
    }
}