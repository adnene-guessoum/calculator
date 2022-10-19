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
let number;
let result;
const keys = document.querySelectorAll(".keys");
const functions = [add,subtract,multiply,divide];
const functionsId = ["+", "-", "*", "/", "operate"];

const keyPress = keys.forEach(
	key => key.addEventListener(
		'click', function(e) {

			if (operationArray.length >= 3 && functionsId.includes(e.target.id)) {

				number = +(operationArray.slice(2).join(""));
				operationArray = operationArray.slice(0,2);
				operationArray.push(number);
				result = operate(operationArray[1], operationArray[0], operationArray[2]);
				operationArray.length = 0;
				operationArray.push(result);
				displayRes.innerText = result;
			}
			
			switch (e.target.id) {
				case 'operate':
					displayRes.innerText = result;
					operationArray.length = 0;
					return operationArray;

				case 'clear':
					operationArray.length = 0;
					result = 0;
					display.innerText = operationArray.join('');	
					displayRes.innerText = result;
					return operationArray;

				case '+':
					number = +(operationArray.join(""));
					display.innerText = number + ' ' + e.target.id;	
					operationArray.length = 0;
					operationArray.push(number);
					operationArray.push(add);
					return operationArray;

				case '-':
					number = +(operationArray.join(""));
					display.innerText = number + ' ' + e.target.id;	
					operationArray.length = 0;
					operationArray.push(number);
					operationArray.push(subtract);
					return operationArray;

				case '*':
					number = +(operationArray.join(""));
					display.innerText = number + ' ' + e.target.id;	
					operationArray.length = 0;
					operationArray.push(number);
					operationArray.push(multiply);
					return operationArray;

				case '/':
					number = +(operationArray.join(""));
					display.innerText = number + ' ' + e.target.id;	
					operationArray.length = 0;
					operationArray.push(number);
					operationArray.push(divide);
					return operationArray;

				case '.':
					operationArray.push(e.target.id);
					display.innerText = display.innerText + e.target.id;
					return operationArray;

				default:
					operationArray.push(e.target.id);
					if (functions.some(el => operationArray.includes(el))) {
						display.innerText =  operationArray.slice(2).join("");
					} else {
						display.innerText = operationArray.join("")
					}
					return operationArray;
			}
		}));

//make the calls to the right functions in order to compute:



function arrayTranscription(arr) {

	let number1 = [];
	let result;
	const operators = ["+","-", "*", "/"]

	if (!(operators.some(el => arr.includes(el)))) {
		for (i of arr){
			number1.push(i)
		}
		return number1;
	}

	for (i of arr) {
		switch (i) {
			case '+':
				result = operate(add, +(number1.join('')),
					+(arr.slice(arr.indexOf(i)+1).join('')));
				return result;
			case '-':
				result = operate(subtract, +(number1.join('')),
					+(arr.slice(arr.indexOf(i)+1).join('')));
				return result;
			case '*':
				result = operate(multiply, +(number1.join('')),
					+(arr.slice(arr.indexOf(i)+1).join('')));
				return result;
			case '/':
				result = operate(divide, +(number1.join('')),
					+(arr.slice(arr.indexOf(i)+1).join('')));
				return result;
			default:
				number1.push(i);
				continue;
		}
	}
}
/*
console.log(arrayTranscription(operationArray));
display.innerText = arrayTranscription(operationArray);	
console.log(operationArray);
*/
