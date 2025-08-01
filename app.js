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
