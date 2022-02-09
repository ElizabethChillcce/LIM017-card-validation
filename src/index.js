import validator from './validator.js';

console.log(validator);

//alert("¡Hola! bienvenido(a) a Sumaq Garden");


function mostrarPagina(){
    document.getElementById("paginaPrincipal").style.display="none";
    document.getElementById("date").style.display="block";
}

let buttonUno= document.getElementById("buttonBuy");
buttonUno.addEventListener("click",mostrarPagina);