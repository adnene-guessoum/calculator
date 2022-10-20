// basic calc functions

function add(a, b) {
	return (+a) + (+b);
};

function subtract(a, b) {
	return a-b;	
};

function multiply(a, b) {
	return a*b;	
};

function divide(a, b) {
	return a/b;	
};

function operate(operator, a, b){
	return operator(a, b);
}

// function populating the calc display
const display = document.querySelector("#display-calc");
const displayRes = document.querySelector("#display-res");

let operationArray = [];
let operation = [];
let result;
const keys = document.querySelectorAll(".keys");
const functions = [add,subtract,multiply,divide];
const functionsId = ["+", "-", "*", "/", "operate"];

const keyPress = keys.forEach(
	key => key.addEventListener(
		'click', function(e) {
			if ((functions.some(el => operationArray.includes(el))) &&
				(functionsId.includes(e.target.id))) {

				for (i of functions) {
					if (operationArray.includes(i)) {

						operation.push(operationArray.slice(0,
							operationArray.indexOf(i)).join(""));

						operation.push(operationArray[operationArray.indexOf(i)]);

						operation.push(operationArray.slice(operationArray.indexOf(i)+1).join(""));
					}
				}

				result = operate(operation[1], operation[0], operation[2])
				displayRes.innerText = result;
				operationArray.length = 0;
				operation.length = 0;
				operationArray.push(result);
			}
			
			switch (e.target.id) {
				case 'operate':
					display.innerText = "";
					operationArray.length = 0;
					return operationArray;

				case 'clear':
					operationArray.length = 0;
					result = 0;
					display.innerText = operationArray.join('');	
					displayRes.innerText = result;
					return operationArray;

				case 'del':
					operationArray.pop();
					display.innerText = display.innerText.slice(0,-1);	
					return operationArray;

				case '+':

					display.innerText = display.innerText + ' ' + e.target.id + ' ' ;
					operationArray.push(add);
					return operationArray;

				case '-':

					display.innerText = display.innerText + ' ' + e.target.id + ' ' ;
					operationArray.push(subtract);
					return operationArray;

				case '*':

					display.innerText = display.innerText + ' ' + e.target.id + ' ' ;
					operationArray.push(multiply);
					return operationArray;

				case '/':
					display.innerText = display.innerText + ' ' + e.target.id + ' ' ;
					operationArray.push(divide);
					return operationArray;

				case '.':
					operationArray.push(e.target.id);
					display.innerText = display.innerText + e.target.id;
					return operationArray;

				default:
					operationArray.push(e.target.id);
					display.innerText = display.innerText + e.target.id;	
					return operationArray;
			}
		}));

//make the calls to the right functions in order to compute:
