let currentNumber = "";
let previousNumber = "";
let result = "";
let operator = "";


const calcButtons = document.querySelectorAll('button');
const numberButtons = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
const mainDisplay = document.querySelector('.main-display');
const secondDisplay = document.querySelector('.secondary-display');
const operatorButtons = document.querySelectorAll('.btn-operator');
const clearAll = document.querySelector('.clear-all');
const deleteDisplay = document.getElementById('C');
const equal = document.querySelector('.equal');
const decimal = document.querySelector(".decimal");

equal.addEventListener('click',()=>{
   if(currentNumber !='' && previousNumber != '') { 
            operate();
        
}
        
        
    
});

decimal.addEventListener("click", () => {
    addDecimal();
  });

clearAll.onclick = () => {clearDisplay(); }


  numberButtons.forEach((button)=>{
    button.addEventListener('click', (event) => {
        
            populateDisplay(event.target.textContent);              
    });
});



  
function populateDisplay(number){
    if (previousNumber !== "" && currentNumber !== "" && operator !== ""){
        
        mainDisplay.textContent = currentNumber;
    }
    
    if(currentNumber.length <= 11 ){
        currentNumber += number;
        mainDisplay.textContent = currentNumber ;

    }

  
   
}

operatorButtons.forEach(button => {
    button.addEventListener('click', (event)=>{
        saveOperation(event.target.textContent);
       
            
           
    });
    
});
function saveOperation(op){
    if (previousNumber === ""){
        previousNumber = currentNumber;
        operatorCheck(op);
    } else if(currentNumber === ""){
        operatorCheck(op);
    } else {
        operate();
        operator = op;
        mainDisplay.textContent ="0";
        secondDisplay.textContent = previousNumber + "" + operator;
    }  
    console.log(op);
} 




  
function operatorCheck(text){
    operator = text;
    secondDisplay.textContent = previousNumber + "" + operator;
    mainDisplay.textContent = "0";
    currentNumber = "";
    
    

    

}






function multiply(previousNumber,currentNumber) {return previousNumber*currentNumber };
function add(previousNumber,currentNumber){return previousNumber + currentNumber};
function subtract(previousNumber,currentNumber){return previousNumber-currentNumber};  

function divide(previousNumber,currentNumber){return previousNumber / currentNumber};
function power(previousNumber,currentNumber) { return Math.pow(previousNumber,currentNumber) };
  
function factorial(previousNumber) {
    let sumFactorial= 1; 
    for (let i = previousNumber; i > 0; i--) {
       sumFactorial = sumFactorial * i;
    }
    return sumFactorial;
};

function operate(){
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);
    let result = "";
  
    if (operator === "+") {
      result = add(previousNumber, currentNumber);
    } else if (operator === "-") {
      result = subtract(previousNumber, currentNumber);
    } else if (operator === "*") {
      result = multiply(previousNumber, currentNumber);
    } else if (operator === "^") {
      result = power(previousNumber, currentNumber);
    } else if (operator === "!") {
      result = factorial(currentNumber);
    } else if (operator === "/") {
      if (currentNumber === 0) {
        result = "ERROR";
        displayResult(result);
        return;
      }
      result = divide(previousNumber, currentNumber);
    }
  
    result = roundNumber(result);
    result = result.toString();
    displayResult(result);
    previousNumber = "";
    currentNumber = result;
    operator = "";
  

 }

 function roundNumber(number){
    return Math.round(number * 10000) / 10000; 
 }
function displayResult(result =""){
    console.log(result)
  
    if (result.length <= 11){
        mainDisplay.textContent = result;
        

    } else {
        mainDisplay.textContent = result.slice(0,11) + "...";
    }

}


function clearDisplay(){
    currentNumber = '';
    previousNumber = '';
    result = '';
    operator = ''
    mainDisplay.textContent = '0';
    secondDisplay.textContent = '';
}

function addDecimal() {
    if (!currentNumber.includes(".")) {
      currentNumber += ".";
      mainDisplay.textContent = currentNumber;
    }
  }