//Math Operatiors Function

function add(num,num){
    num + num
}

function substract(num,num){
    num - num
}

function multiply(num,num){
    num * num 
}

function divide(num,num){
    num / num
}


let num;
let operator;

function operate(num1,num2,operator){
    if(operator == "+" || operator == "=") add(num1,num2);
    if(operator == "-" || operator == "=") substract(num1,num2);
    if(operator == "*" || operator == "=") multiply(num1,num2);
    if(operator == "/" || operator == "=") divide(num1,num2);
}

let numbers = document.querySelectorAll(".numbers");
for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click",function(e){
        num = Number(numbers[i].textContent);
        let display = document.querySelector(".display");
        display.textContent = num;

    })
}

//Configure The Display

let display = document.querySelector(".display");


let operators = document.querySelectorAll(".operators")
for(let i = 0 ; i < operators.length; i++){
    operators[i].addEventListener("click",function(e){
        operator = operators[i].textContent;
        display.textContent = operator;
})}

let clear = document.querySelector('.clear')
clear.addEventListener('click',function(){
    display.textContent = "";
})