$(document).ready(function(){

  // Business Logic
  const numberArray = [];
  const stringArray = [];

  function rangeOf(input) {
    for(let i = 0; i <= input; i++) {
      const number = i;
      numberArray.push(number);
    }
  } 

  function lookForOne(){
    for(number of numberArray){
      const numberString = number.toString();
      stringArray.push(numberString);
    }
    stringArray.forEach(function(string){
      const splitString = string.split("").toString();
      if(splitString.substring(0, 1) === "1"){
        let one = splitString.substring(0, 1);
        one = "Beep!";
        console.log(one)
      }
    });
  }










  $('form').submit(function(e){
    e.preventDefault();

    const userInput = parseInt($('input#userNumber').val());

    //User Logic
    function roboger(input){
      rangeOf(input);
      lookForOne();
    }
    roboger(userInput)
    $("p#output-text").text();
    $('div#output').show();
  });
});