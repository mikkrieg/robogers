$(document).ready(function(){

  // Business Logic
  const numberArray = [];

  function rangeOf(input) {
    for(let i = 0; i <= input; i++) {
      const number = i;
      numberArray.push(number);
    }
    console.log(numberArray.join(", "));
  }

 










  $('form').submit(function(e){
    e.preventDefault();

    const userInput = parseInt($('input#userNumber').val());

    //User Logic
    function roboger(input){
      rangeOf(input)
    }
    roboger(userInput)
    $("p#output-text").text();
    $('div#output').show();
  });
});