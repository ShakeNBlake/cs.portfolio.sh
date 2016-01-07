var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);

function doMath() {
    
    var number1 = parseInt(input1.value);
    var number2 = parseInt(input2.value);
    
    
    if  (dropdown.value == "+"){
        answer = number1 + number2;
        display.innerHTML = answer;
    }

    if  (dropdown.value =="-"){
        answer = number1 - number2;
        display.innerHTML = answer;
    }
    if  (dropdown.value =="*"){
        answer = number1 * number2;
        display.innerHTML = answer;
    }
    if  (dropdown.value =="/"){
        answer = number1 / number2;
        display.innerHTML = answer;
    }
    if (dropdown.value =="^"){
        answer = Math.pow(number1, number2);
        display.innerHTML = answer;
    }
}