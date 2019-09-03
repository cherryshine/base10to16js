function calculate(input) {
	var modulus = [];
	var number;
	var i = 0;

	number = Math.floor(input / 16);
	modulus[i] = Math.floor(input % 16);

	while (number != 0) {
		i++;
		modulus[i] = number == 0 ? 1 : Math.floor(number % 16);
		number = Math.floor((number / 16));
	}

	for (var k = 0; k < modulus.length; k++) {
		if (modulus[k] == 10) modulus[k] = "A";
		if (modulus[k] == 11) modulus[k] = "B";
		if (modulus[k] == 12) modulus[k] = "C";
		if (modulus[k] == 13) modulus[k] = "D";
		if (modulus[k] == 14) modulus[k] = "E";
		if (modulus[k] == 15) modulus[k] = "F";
	}
	
	return modulus.reverse();
}

function convert() {
	var input = document.getElementById("base10").value;
	var result = "";
	calculate(input).forEach((element) => {
		result += element;
	})
	document.getElementById("output").innerHTML = result;
}

window.onload = () => {
	document.getElementById("btn").addEventListener("click", convert);
}

// THESE 2 LINES BELOW MAKE THE SAME FREAKIN' JOB THAT I DID THAT IN 1234123 LINES ABOVE, LMAO
//var mynumber = 5815; 
//console.log(mynumber.toString(16));