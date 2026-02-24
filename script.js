//Math Operatiors Function

function add(num1,num2){
    num1 + num2
}

function substract(num1,num2){
    num1 - num2
}

function multiply(num1,num2){
    num1 * num2 
}

function divide(num1,num2){
    num1 / num2
}


let num1;
let num2;
let operator;

function operate(num1,num2,operator){
    if(operator == "+" || operator == "=") add(num1,num2);
    if(operator == "-" || operator == "=") substract(num1,num2);
    if(operator == "*" || operator == "=") multiply(num1,num2);
    if(operator == "/" || operator == "=") divide(num1,num2);
}

