function calcular() {
    let valor1 = prompt("Introdueixi el primer valor");
    let valor2 = prompt("Introdueixi el segon valor");

    console.time();     //comença a mesurar el temps que triga
    let resultat = Math.pow(valor1, valor2);   //en la variable resultat es guarda valor1 elevat a valor2
    console.timeEnd();     //acaba de mesurar el temps que triga
    console.log(resultat);      //mostra el resultat per la consola del navegador

    
}


function mitjanes() {

    let numero1 = prompt("Introdueixi el primer valor");
    let numero2 = prompt("Introdueixi el segon valor");
    let numero3 = prompt("Introdueixi el tercer valor");


    let maxim = Math.max(numero1, numero2, numero3);
    let mitja = ((numero1 + numero2 + numero3) / 3);
    let mediana = ((numero1 + numero2 + numero3) / 2);

    console.log(maxim);
    console.log(mitja);
    console.log(mediana);


}