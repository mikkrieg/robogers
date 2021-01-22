$(document).ready(function(){

  // Business Logic
  const numberArray = [];

  function rangeOf(input) {
    for(let i = 0; i <= input; i++) {
      const number = i.toString();
      numberArray.push(number);
    }
  } 

  function lookForFirst(){
    numberArray.forEach(function(number){
      const firstNumber = number[0];
      if(firstNumber === '1'){
        const replaced = number.replace(number, "Beep!");

      } else if(firstNumber === '2') {
        const replaced = number.replace(number, "Boop!");

      } else if(firstNumber === '3'){
        const replaced = number.replace(number, "Won't you be my neighbor?");

      }
    });
  }






  //User Interface Logic
  $('form').submit(function(e){
    e.preventDefault();

    const userInput = $('input#userNumber').val();

   
    function roboger(input){
      rangeOf(input);
      lookForFirst();
    }
    roboger(userInput)
    $("p#output-text").text();
    $('div#output').show();
  });
});