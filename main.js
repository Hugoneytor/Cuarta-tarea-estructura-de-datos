import Punto from './punto.js';

class Main{
    constructor(){
        let btnMapa = document.querySelector("#btnMapa").addEventListener("click", ()=>{

            var puntoUno = new Punto();
            var puntoDos = new Punto();
            var operacion = new Punto();

            puntoUno.ejeX = 3;
            puntoUno.ejeY = 34;
            console.log("Coordenada 1: " + puntoUno.toString());

            puntoDos.ejeX = 2;
            puntoDos.ejeY = 43;
            console.log("Coordenada 1: " + puntoDos.toString());

            var distancia = operacion.distancia(puntoUno.ejeX, puntoUno.ejeY, puntoDos.ejeX, puntoDos.ejeY);
            console.log("La diferencia de los puntos es de: " + distancia);


        });
    }
}

var m = new Main();