const numeros = [3, 1, 1, 10, 5, 7, 2];
let ma = numeros[0];
let me = numeros[0];
let sum = 0;

let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;
for (numeroPosicion of numeros){
    suma = suma + numeroPosicion;
    if (numeroPosicion > ma) {
        ma = numeroPosicion;
    } 
    if (numeroPosicion < me) {
        me = numeroPosicion;
    }
}
// console.log(suma, numMayor, numMenor);

const parrafo = document.querySelector("#parrafo");
// console.log (parrafo);
parrafo.innerHTML = "La suma total es " + sum + ", el número menor es " + me + " y el número mayor es " + ma + ".";
parrafo.classList.add("parrafo--azul");