// Business Logic
const numberArray = [];

function rangeOf(input) {
  for(let i = 0; i <= input; i++) {
    const number = i.toString();
    numberArray.push(number);
  }
} 

function checkingArray(){
  const newArray = numberArray.map(function(number){
  if(number.includes('3')){
    const checkedNumber = "Won't you be my neighbor?";
    return checkedNumber
  } else if(number.includes('2')){
    const checkedNumber = "Boop!";
    return checkedNumber;
  } else if(number.includes('1')){
    const checkedNumber = "Beep!";
    return checkedNumber; 
  } else {
    return number;
  }
  });
  return newArray;
}

//User Interface Logic
$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();

    const userInput = $('input#userNumber').val();

   
    function roboger(input){
      rangeOf(input);
      let output = checkingArray();
      let joinedOutput = output.join(" ");
      return joinedOutput;
    }
    const result = roboger(userInput)
    $("p#output-text").text();
    $('div#output').show();
  });
});