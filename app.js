
const container = document.getElementById("container");
const keys=document.querySelectorAll('[data-key]');
const operatorsbtn=document.querySelectorAll('[data-operator]');
const lastScreen=document.querySelector(".lastScreen");
const currentScreen=document.querySelector(".currentScreen");
const operator1=document.querySelector(".operator1");
const operator2=document.querySelector(".operator2");
const operation=document.querySelector(".operation");
const equals=document.getElementById("equals");
const times=document.getElementById("times");
const plus=document.getElementById("plus");
const minus=document.getElementById("subtract");
const dividee=document.getElementById("divide");
const clearBtn=document.getElementById("ClearBtn");
const deleteScreen=document.getElementById("Delete");
let firstOperand='';
let secondOperand='';
let operates=null;

equals.addEventListener('click', eval)
clearBtn.addEventListener('click', resetScreen)
keys.forEach((button) =>
  button.addEventListener('click', () => displayNumbers(button.textContent))
)
operatorsbtn.forEach((button) =>
  button.addEventListener('click', () => displayOperators(button.textContent))
)

const add=(num1, num2)=>{
    let answer= num1+num2;
    return answer;
}
const subtract=(num1, num2)=>{
    let answer= num1-num2;  
    return answer;
}
const multiply = function(num1,num2) {
    return num1*num2
};
const divide=function(num1,num2){
    return num1/num2;
}



function displayNumbers(number){
 

     currentScreen.textContent += number

}

function displayOperators(operators){
  operates=operators
  firstOperand=currentScreen.textContent;
  secondOperand=currentScreen.textContent;
     lastScreen.textContent += `${firstOperand} ${operators}`
     currentScreen.textContent='';
}

function resetScreen(){
currentScreen.textContent='';
lastScreen.textContent='';
 
}
function deleteEntry(){
// if(currentScreen.textContent!=null){
//   cu
}
function roundDecimal(num){
  return Math.round(num * 100) / 100
}
function eval(){
  secondOperand=currentScreen.textContent;

 if(operates==='/'&&secondOperand==='0'){
   alert("Can't Divide by Zero")
   resetScreen()
 }
 else if(secondOperand===""){
   alert("You must have a pair of numbers to calculate")
 }
 else{

currentScreen.textContent=operate(operates, firstOperand, secondOperand )
lastScreen.textContent=`${firstOperand} ${operates} ${secondOperand}=`
operates=null;
 }
}
function operate(operator, num1, num2){

num1 = Number(num1)
num2 = Number(num2)

if(operator==="+"){
  return add(num1,num2)
  
}
else if(operator==="-"){
  return subtract(num1,num2)
}
else if(operator==="x"){
  return multiply(num1,num2)
}
else{
  return divide(num1,num2)
}

}

