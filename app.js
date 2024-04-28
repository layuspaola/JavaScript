//document.querySelector permite seleccionar cada uno de los elementos en el html
//establecer un puente
// se declara elementos dentro de la funcion(elemento y texto) 
//para no tener que repetir el codigo
// crear un ID es buena practica cuando hay mas de un elemento del mismo tipo.. ej dos 'h2'
//parseInt cambia el elemento a tipo numero

let numeroSecreto = 0
let intentos = 0
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//queryselector selecciona elementos del html
// document.algo crea un puente de seleccion al html
function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


//onclick en index crea la liga a la funcion creada significa que se ejecuta al click
function verificarIntento() {
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
    if (numeroDeUsuario === numeroSecreto) {
        //asignarTexto('h1', 'Felicidades!!')
        asignarTexto('p', `acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez'  : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // este bloque es cuando no se acierta
        if (numeroDeUsuario > numeroSecreto){ 
            asignarTexto('p', 'el numero secreto es menor');
        } else {
            asignarTexto('p', 'el numero secreto es mayor');
            
        }
        intentos ++
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
   valorCaja = document.querySelector('#valorUsuario').value = '';
   
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    // si ya se sorteo todos los nros 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTexto('p', 'Ya se Sortearon todos los numeros');

    }else{

        // si el nr generado esta incuido en la lista, generar uno nuevo sino seguir con el codigo.
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            //return y el nomre de la funcion permite como llamarse a si misma 
            return generarNumeroSecreto;

        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        
        }
    }
 }

function paginaInicial (){
    asignarTexto('h1', 'juego del nr secreto');
    asignarTexto('p', `indica un nr del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    //indicar mje inicial ,generar nro aleatorio, reinicial el nro de intentos 
    paginaInicial();
    //deshabilitar boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    
}

paginaInicial();