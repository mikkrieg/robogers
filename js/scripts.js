// Business Logic
let numberArray = [];

function rangeOf(input) {
  for(let i = 0; i <= input; i++){
    const number = i.toString();
    numberArray.push(number);
  }
}; 

function checkingArray(){
  let newArray = [];
  numberArray.forEach(function(number){
    if(newArray.length != number){
      newArray = [];
    }
    if(number.includes('3')){
      const checkedNumber = "Won't you be my neighbor?";
      newArray.push(checkedNumber);
    } else if(number.includes('2')){
      const checkedNumber = "Boop!";
      newArray.push(checkedNumber);
    } else if(number.includes('1')){
      const checkedNumber = "Beep!";
      newArray.push(checkedNumber); 
    } else {
      newArray.push(number);
    }
  });
  return newArray.join(' ')
};


//User Interface Logic
$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();
    const userInput = $('input#userNumber').val();
    $('input#userNumber').val("");

    function roboger(input){
      rangeOf(input);
      const output = checkingArray();
      return output;
    };

    const result = roboger(userInput);
    $('div#output').show();
    $('span#output-text').text(result); 
  });
});