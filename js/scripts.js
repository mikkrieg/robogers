$(document).ready(function(){

  // Business Logic
  const numberArray = [];

  function rangeOf(input) {
    for(let i = 0; i <= input; i++) {
      const number = i.toString();
      numberArray.push(number);
    }
  } 

  
  function lookForOne(){
    numberArray.forEach(function(number){
      const firstNumber = number[0];
      if(firstNumber === '1'){
        const replaced = number.replace(number, "Beep!");
        console.log(replaced);
      }
    });
  }
  
  
  
  
    //   numberArray.forEach(function(number){
  //     const splitString = number.split(" ").join();
  //     splitArray.push(splitString);
  //   });
  //   console.log(splitArray);
  //   for(let i = 0; i <= stringArray; i++){
  //     console.log(stringArray);
  //     if(splitString.substring(0, 1) === "1"){
  //       const replaced = splitString.replace(stringArray[i], "Beep!");
  //       console.log(replaced);
  //       console.log(stringArray);
  //       console.log("you've reached if")
  //     }
  //   }
  // }
  // console.log(numberArray);
  // console.log(stringArray);








  $('form').submit(function(e){
    e.preventDefault();

    const userInput = $('input#userNumber').val();

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