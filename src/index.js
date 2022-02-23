import validator from './validator.js';

function mostrarPagina(){
    document.getElementById("paginaPrincipal").style.display="none";
    document.getElementById("date").style.display="block";
}

let buttonUno= document.getElementById("buttonBuy");
buttonUno.addEventListener("click",mostrarPagina);

let buttonValidation = document.getElementById("buttonValidation");
buttonValidation.addEventListener("click",clickButton);

function clickButton(){
    let numberCard = document.getElementById("numberCard");
    numberCard = numberCard.value;
    console.log(numberCard);
    let hashtag = validator.maskify(numberCard);
      console.log(hashtag);
    let validar = validator.isValid(numberCard);
    console.log(validar);

    let message = document.getElementById("mensaje");
     if (validar === true) {
         message.innerText = "TARJETA VALIDA " + hashtag;
         message.classList.add("error-text");

     } else {
         message.innerText = "TARJETA INVALIDA";
         message.classList.add("error-text");
    }
   
    
}

