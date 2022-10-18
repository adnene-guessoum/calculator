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
console.log(display);
const operationArray = [];


const keys = document.querySelectorAll(".keys");



const keyPress = keys.forEach(
	key => key.addEventListener(
		'click', function(e) {
			const userInput = e.target.id ;
			display.innerText = userInput;	
			operationArray.push(userInput);
			return userInput;
}
	)
);

console.log(operationArray);
