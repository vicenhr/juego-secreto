
let intentos = 0;
let numeroSecreto = 0;
let numeroMaximo = 10;
let numeroMaximoIntentos = 6;
let listaNumertosSorteados = [];
condicionesIniciales();

function condicionesIniciales() {
    asignarElementoTexto('h1', 'Juego del número secreto');
    asignarElementoTexto('p', `Indica un numero del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroAleatorio();
    console.log("secret number: " + numeroSecreto + " type: " + typeof (numeroSecreto));
    intentos = 1;
}

function asignarElementoTexto(elemento, texto) {
    let etiqueta = document.querySelector(elemento);
    etiqueta.innerHTML = texto;
    return;
}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1);

    console.log(listaNumertosSorteados);

    // Si ya se han sortado todos los numeros del 1-10
    if (listaNumertosSorteados.length == numeroMaximo) {
        asignarElementoTexto('p', 'Fin del juego');
        document.querySelector('#intentar').setAttribute('disabled', true);
    } else {
        // Verifica que el numero sorteado no se repita
        if (listaNumertosSorteados.includes(numeroGenerado)) {
            return generarNumeroAleatorio();
        } else {
            listaNumertosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log("user number: " + numeroDeUsuario + " type: " + typeof (numeroDeUsuario));

    if (numeroDeUsuario === numeroSecreto) {
        asignarElementoTexto('p', `Acertaste el número, en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarElementoTexto('p', `El numero secreto es menor, ${(numeroMaximoIntentos-(intentos+1))==1 ? 'resta 1 intento' : `restan ${numeroMaximoIntentos-(intentos+1)} intentos`}`);
        } else {
            asignarElementoTexto('p', `El numero secreto es mayor, ${(numeroMaximoIntentos-(intentos+1))==1 ? 'resta 1 intento' : `restan ${numeroMaximoIntentos-(intentos+1)} intentos`}`);
        }
        intentos++;
        limpiarCaja('#valorUsuario');
        if (intentos == numeroMaximoIntentos) {
            finalizarJuego();
        }
    }
    return;
}

function reiniciarJuego() {
    // Limpiar la caja de texto y el parrafo
    limpiarCaja();
    // Llamada a condiciones iniciales
    condicionesIniciales();
    // Deshabilitar boton
    document.getElementById('reiniciar').setAttribute('disabled', true);
    //document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function finalizarJuego(){
    asignarElementoTexto('p', 'Fin del juego');
    document.getElementById('valorUsuario').style.display = 'none';
    document.getElementById('intentar').style.display = 'none';
    document.getElementById('reiniciar').style.display = 'none';
}


/*
// ETAPA 2
function saludar() {
    console.log('¡Hola, mundo!');
}

function saludarNombre(nombre) {
    console.log("¡Hola, "+nombre+"!");
}

function getNumber(number) {
    return number+number;
}

function getAverage(x,y,z) {
    return (x+y+z)/3;
}

function getMax(x,y) {
    return x > y ? x : y;
}

function getMult(number) {
    return Math.pow(number,2);
}

saludar();
saludarNombre('Vicente');
console.log(getNumber(5));
console.log(getAverage(1,2,3));
console.log(getMax(5,6));
console.log(getMult(4));
*/

/*
// ETAPA 3
function cacularIMC(peso, altura) {
    return peso/(Math.pow(altura,2));
}

function cacularFactorial(numero) {
    if(numero==2){
        return 2;
    }
    return numero*cacularFactorial(numero-1);
}

function dollarToReales(dollar) {
    return dollar*5.58;
}

function calcularAreaSala(largo, ancho) {
    return largo*ancho;
}

function calcularAreaCirculo(radio) {
    return Math.PI*Math.pow(radio,2);
}

function calcularPerimetroCirculo(radio) {
    return 2*(Math.PI*radio);
}

function tablaMultiplicar(numero) {
    for(let i=0;i<=10;i++){
        console.log(`${numero}`+'x'+`${i}`+'='+(numero*i));
    }
}

console.log('IMC Vicente: ',cacularIMC(70,1.80));
console.log('Factorial: '+cacularFactorial(5));
console.log(`11 dollars to Reales: ${dollarToReales(11)}`);
console.log('Sala rectangular - Area: ',calcularAreaSala(120,200));
console.log('Sala Circular - Area: '+calcularAreaCirculo(5)+' Perimetro: '+calcularPerimetroCirculo(5));
tablaMultiplicar(9);
*/
/*
// ETAPA 4
let listaGenerica = [];

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarLenguajesDeProgramacion(lista) {
    console.log(lista);
    return;
}

function mostrarLenguajesDeProgramacionInverso(lista) {
    for (let index = lista.length-1; index >= 0; index--) {
        console.log(lista[index]);
        //lista.reverse
    }
    return;
}

function calcularPromedio(lista) {
    let promedio=0;
    for (let index = 0; index < lista.length; index++) {
        promedio += lista[index];
    }
    promedio = promedio/lista.length;
    return promedio;
}

function getMayoraAndMenor(lista) {
    let max = lista[0];
    let min = lista[0];
    for (let index = 1; index < lista.length; index++) {
        if(lista[index]>max){
            max = lista[index]
        }
        if(lista[index]<min){
            max = lista[index]
        }
    }
    return `El numero mas grande es ${max} y el numero más pequeño es ${min}`;
}

function calcularSuma(lista) {
    let suma = 0;
    for (let index = 0; index < lista.length; index++) {
        suma += lista[index];
    }
    return suma;
}

function buscarNumero(lista, numero) {
    for (let index = 0; index < lista.length; index++) {
        if(lista[index]==numero){
            return index;
        }
    }
    return -1;
}

function sumarPosiciones(lista, listaDos) {
    let nuevaLista = [];
    for (let index = 0; index < lista.length; index++) {
        nuevaLista[index] = lista[index]+listaDos[index];
    }
    return nuevaLista;
}

function listaCuadrada(lista) {
    let nuevaLista = [];
    for (let index = 0; index < lista.length; index++) {
        nuevaLista[index] = Math.pow(lista[index],2 ); 
    }
    return nuevaLista;
}

let listaNumeros = [1,2,3,4,5];

let elementoExistente = 5;
let elementoNoExistente = 6;

console.log('Lista de lenguajes de programación: ' + mostrarLenguajesDeProgramacion(lenguajesDeProgramacion));
console.log('Lista de lenguajes de programación invertida: ' + mostrarLenguajesDeProgramacionInverso(lenguajesDeProgramacion));
console.log('Lista de numeros: ' + listaNumeros);
console.log('Promedio: ' + calcularPromedio(listaNumeros));
console.log(getMayoraAndMenor(listaNumeros));
console.log('Suma: ' + calcularSuma(listaNumeros));
console.log('Posición: ' + buscarNumero(listaNumeros, elementoExistente));
console.log('Posición: ' + buscarNumero(listaNumeros, elementoNoExistente));
let listaNumerosDos = [6,7,8,9,10];
console.log('Lista de numeros: ' + listaNumeros);
console.log('Lista de numeros: ' + listaNumerosDos);
console.log('Suma de elementos, misma posicion: ' + sumarPosiciones(listaNumeros, listaNumerosDos));
console.log('Lista cuadrada: ' + listaCuadrada(listaNumeros));
*/