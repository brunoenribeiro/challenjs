//Create a "pyramid", starting with the middle letter in the first line, and adding adjacent letters on next each line.
const createPyramidFromText = () => {
	const input = document.getElementById("input1").value;

	if (!input) {
		document.getElementById("result1").innerHTML = "Please type a word.";
		return false;
	} else if (input.indexOf(" ") !== -1){
		document.getElementById("result1").innerHTML = "Just one word, please.";
		return false;
	} else if (input.length % 2 === 0){
		document.getElementById("result1").innerHTML = "Please enter a word with an odd ammount of letters";
		return false;
	}

	const times = Math.ceil(input.length / 2); //Times a loop should happen until the entire word is printed.
	
	const middleIndex = Math.floor(input.length / 2);
	let line = input[middleIndex]; //Middle letter, first row
	let result = line;

	//Loop to define next lines, starting from the second
	for (let i = 1; i < times; i++){
		line = input[middleIndex - i] + line + input[middleIndex + i];
		result += "<br>" + line;
	}

	document.getElementById("result1").innerHTML = result;
}

const letterCount = () =>{
	const span = document.getElementById("lettercount1");
	const value = document.getElementById("input1").value.length;
	span.innerHTML = value + ((value > 1 || value === 0) ? " letters." : " letter.");
}