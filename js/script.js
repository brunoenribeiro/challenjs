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

const convertIntoLeet = () => {
	const input = document.getElementById("input2").value;
	const dictionary = {
		"a": "4",
		"b": "6",
		"c": "( ",
		"d": "[)",
		"e": "3",
		"f": "]=",
		"g": "&",
		"h": "#",
		"i": "!",
		"j": ",|",
		"k": "]{",
		"l": "L",
		"m": "(\\/)",
		"n": "(\\)",
		"o": "( )",
		"p": "P",
		"q": "Q",
		"r": "9",
		"s": "$",
		"t": "7",
		"u": "(_)",
		"v": "\\/",
		"w": "'//",
		"x": "%",
		"y": "'/",
		"z": "\"/_"

	}
	let result = "";

	//For each character in input, search if dictionary has an key for it. If so, add the key's value to the result. If not, add the character itself.
	Array.from(input).forEach(function(c){
		if (dictionary.hasOwnProperty(c.toLowerCase())){ //.toLowerCase() avoids duplicating keys in uppercase.
			result += dictionary[c.toLowerCase()];
		} else if (c === " ") {
			result += "<br>";
		} else {
			result += c;
		}
	});

	document.getElementById("result2").innerHTML = result;
}