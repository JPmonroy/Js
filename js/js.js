var boton = document.getElementById('Enviar');

function calcular(){

var fecha = document.getElementById('fecha').value;
var nombre = document.getElementById('nombre').value;
var mensaje = document.getElementById('bienvenida');

var respuestaN = "Hola niño "+ nombre
var respuestaS = "Hola señor "+ nombre

if (fecha>=2003){
   mensaje.textContent = respuestaN
}
else{
    mensaje.textContent = respuestaS
}
}

function cajaTexto (){

mensaje.classList.add('mensaje');

}

boton.addEventListener('click', cajaTexto);
boton.addEventListener('click', calcular);