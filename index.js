let num1;
let num2;
let result;


function add(){
 let num1 = Number(document.getElementById("num1").value)
 let num2 = Number(document.getElementById("num2").value)
 result = num1+num2
 document.getElementById("solution").textContent = result
 }

function substract(){
  let num1 = Number(document.getElementById("num1").value)
  let num2 = Number(document.getElementById("num2").value)
  result = num1-num2
  document.getElementById("solution").textContent = result
  }

function divide(){
  let num1 = Number(document.getElementById("num1").value)
  let num2 = Number(document.getElementById("num2").value)
  result = num1/num2
  document.getElementById("solution").textContent = result
  }

function multiply(){
  let num1 = Number(document.getElementById("num1").value)
  let num2 = Number(document.getElementById("num2").value)
  result = num1*num2
  document.getElementById("solution").textContent = result
  }


