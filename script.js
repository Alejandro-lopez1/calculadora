//operacion o resultado parcial
let parcial = "";

//elemento donde se coloca la operacion que se esta realizando
let operRealizada = document.getElementById("operacionRealizada");

//elemento donde se coloca el resultado
let txtResult = document.getElementById("txtResultado");

//ultimo operado seleccionado
let operadorSeleccionado = "";

//numero ingresado
let numero ="";

//para determinar si lo ultimo pulsado es un numero o una operacion
let ultimoDigitoPresionado = "";

function operador(num){
    //concatena el numero
    numero = numero + num;
    //concatena la operacion hasta el momento
    parcial = parcial + num;
    //muestra
    operRealizada.innerHTML = parcial;
    //division por cero
    if(numero=='0' && operadorSeleccionado=='/'){
        limpiar();
        txtResult.innerHTML = "Indefinido";
        return;
    }
    //guardo el tipo de tecla presionada por ultima vez
    if(ultimoDigitoPresionado=='operacion'){
        ultimoDigitoPresionado = 'numero'
    }
}

//detecto cuando se presiona una operacion
function operacion(oper){
    //guarda la operacion elegida
    operadorSeleccionado = oper;
    //actualiza el tipo de dato presionado
    ultimoDigitoPresionado = "operacion";
    //armando la formula matematica
    parcial = parcial + oper; 
    numero = 0;
    operRealizada.innerHTML = parcial;
}

//realizo el calculo de la formula matematica al presionar =
function calculo(){
    //evalúo la formula
    parcial = eval(parcial);
    txtResult.innerHTML = parcial;
    //se convierte en string por si continúa la fórmula
    parcial = parcial.toString();
    numero = "";
    operRealizada.innerHTML = parcial;
}

function limpiar(){
    operadorSeleccionado = "";
    parcial = "";
    txtResult.innerHTML = "";
    numero = "";
    operRealizada.innerHTML = 0;
}