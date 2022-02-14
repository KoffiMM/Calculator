const container = document.getElementById("container");
const keys=document.querySelectorAll('[data-key]');
const dot = document.getElementById('dot')
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
const deleteBtn=document.getElementById("DeleteBtn");
let firstOperand='';
let secondOperand='';
let operates=null;

equals.addEventListener('click', eval)
dot.addEventListener('click', displayDot)
clearBtn.addEventListener('click', resetScreen)
deleteBtn.addEventListener('click',deleteEntry)
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
function displayDot() {
  if (currentScreen.textContent === '')
  currentScreen.textContent = '0'
  if (currentScreen.textContent.includes('.')) return
  currentScreen.textContent += '.'
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
function keyboardEntry(e){
 
  if((e.key)>=0&&(e.key)<=9){
    displayNumbers(e.key);
}
else if(e.key==='/'||e.key==='+'||e.key==='x'||e.key==='-'){
displayOperators(e.key);
}
else if(e.key==='Enter'){
  eval();
}
else if(e.key==='Backspace'){
  deleteEntry()
}
else if(e.key==='Delete')
{
  resetScreen();
}
else if(e.key==='.'){
  displayDot()
}
  else return;
}
window.addEventListener("keydown", keyboardEntry)
function deleteEntry(){
  // firstOperand=currentScreen.textContent;
  if(currentScreen.textContent!=''){
  currentScreen.textContent= currentScreen.textContent.slice(0, -2)
  }
  else {
    lastScreen.textContent=lastScreen.textContent.slice(0, -1)
  }
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