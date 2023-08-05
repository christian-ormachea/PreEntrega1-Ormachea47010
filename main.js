/** Yo hice una funcion de entrada de string para el nombre, que devuelve un alert saludando, luego
 *  una verificacion de edad en la que si se es mayor de edad se puede ingresar al sitio**/


entradaInicial();
if(permitirEntrada() == true){
    alert("Bienvenido al sitio");
} else {
    alert("Disculpe debe ser mayor de edad para ingresar");
}


function entradaInicial(){
    let nombre = prompt("Hola que tal, ingrese su nombre para continuar");
    alert('Hola que tal ' + nombre);
}


function permitirEntrada(){
    let edad = parseInt(prompt("Ingrese su edad"));
    if(edad >= 18){
        permitirEntrada = true;
    } else {
        permitirEntrada = false;
    }

    return(permitirEntrada);
}


