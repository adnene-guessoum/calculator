// basic calc functions

function add(a, b) {
	return a+b;
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

const operationArray = [];

const keys = document.querySelectorAll(".keys");

const keyPress = keys.forEach(
	key => key.addEventListener(
		'click', function(e) {
			switch (e.target.id) {
				case 'operate':
					console.log(arrayTranscription(operationArray));
					display.innerText = arrayTranscription(operationArray);	
					console.log(operationArray);
					operationArray.length = 0;
					console.log(operationArray);
					return operationArray;
				case 'clear':
					operationArray.length = 0;
					display.innerText = operationArray.join('');	
					console.log(operationArray);
					return operationArray;
				default:
					operationArray.push(e.target.id);
					display.innerText = operationArray.join('');	
					console.log(operationArray);
			}
		}));

//make the calls to the right functions in order to compute:



function arrayTranscription(arr) {
	if (arr.length === 0) {
		return "Enter something"
	}

	let number1 = [];
	let result;
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
