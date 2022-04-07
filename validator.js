/* eslint-disable no-console */
const validator = {
  isValid: function (x){
    //convertir los nùmeros de la tarjeta en un array
    let arrayCard = Array.from(x);
    //convertir los string del array en nùmeros enteros
    let myArray=[];//cree un array vacio
    for (let i=0;i<arrayCard.length;i++){//cree un bucle para almacenar los string del anterior arrayCard convertidos en nùmeros
      myArray.push(parseInt(arrayCard[i]));
    }
    //invetir los nùmeros del nuevo array
  myArray.reverse();
  console.log(myArray);
  //return myArray;

  //Ubicar los nùmeros "pares"
  let sumDigits = 0;
  for (let i=0; i<myArray.length;i++){
    if((i+1)%2==0){
      myArray[i]*=2;
      if(myArray[i]>=10){
        myArray[i]-=9;
        //console.log(myArray[i]);
      }
      sumDigits+=myArray[i];
      //console.log(sumDigits);
    }
    else{
      sumDigits+=myArray[i];
      //console.log(sumDigits)
    }
}
if(sumDigits%10==0){
      return true
}
else{
  return false
}
},

maskify: function(numberCard) {
 let hashtag = [];
 //console.log(hashtag)
  for (let i = 0; i < numberCard.length; i++){
    if (i < numberCard.length - 4){
      hashtag.push("#");
      //console.log(hashtag)
    } else {
        hashtag.push(numberCard[i]);
        //console.log(numberCard[i])
    }
    
  }
   return hashtag.join("");
   
 }
}
export default validator;
