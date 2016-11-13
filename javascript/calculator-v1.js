window.onload = function(){

	var valueOne = 0;
	var valueTwo = 0;
	var result;
	var mode;
	var firstUse = true;
	var numberButtons = document.getElementsByClassName("numbers");

	function calculate(){
		console.log("Calculate function being called...")
		switch (mode) {
		    case "divide":
		        result = parseInt(valueOne, 10) / parseInt(valueTwo, 10);
		        break;
		    case "multiply":
		        result = parseInt(valueOne, 10) * parseInt(valueTwo, 10);
		        break;
		    case "subtract":
		        result = parseInt(valueOne, 10) - parseInt(valueTwo, 10);
		        break;
		    case "add":
		        result = parseInt(valueOne, 10) + parseInt(valueTwo, 10);
		        break;
		}
		mode = '';
		firstUse = true;
		document.getElementById("display").value = result;
	}

	for (var i=0; i<numberButtons.length; i++){
		numberButtons[i].onclick = function(e){
			console.log("First use? " + firstUse);
			e.preventDefault();
			var buttonValue = this.value;
			if(mode) {
				if (firstUse == true){
					valueTwo = buttonValue;
				} else {
					valueTwo += buttonValue;
				}
			} else {
				if (firstUse == true){
					valueOne = buttonValue;
				} else {
					valueOne += buttonValue;
				}
			}
			if (firstUse == true){
				document.getElementById("display").value = buttonValue;
				firstUse = false;
			} else {
				document.getElementById("display").value += buttonValue;
			}
		}
	}
		
	document.getElementById("point").onclick = function(e){
		e.preventDefault();
		
	}

	document.getElementById("divide").onclick = function(e){
		e.preventDefault();
		mode = "divide";
		firstUse = true;
		console.log("Value 1: " + valueOne);
		console.log("Value 1: " + valueTwo);
	}

	document.getElementById("multiply").onclick = function(e){
		e.preventDefault();
		mode = "multiply";
		firstUse = true;
		console.log("Value 1: " + valueOne);
		console.log("Value 1: " + valueTwo);
	}

	document.getElementById("subtract").onclick = function(e){
		e.preventDefault();
		mode = "subtract";
		firstUse = true;
		console.log("Value 1: " + valueOne);
		console.log("Value 1: " + valueTwo);
	}

	document.getElementById("add").onclick = function(e){
		e.preventDefault();
		mode = "add";
		firstUse = true;
		console.log("Value 1: " + valueOne);
		console.log("Value 1: " + valueTwo);
		calculate();
	}

	document.getElementById("equals").onclick = function(e){
		e.preventDefault();
		console.log(mode);
		console.log("Value 1: " + valueOne);
		console.log("Value 2: " + valueTwo);
		calculate();
		
	}
		
		
	//}

	// document.getElementById("1").onclick = function(e){
	// 	e.preventDefault();
	// 	if(mode) {
	// 		console.log("here");
	// 		valueTwo = 1;
	// 	} else {
	// 		console.log("there");
	// 		valueOne = 1;
	// 	}
	// 	document.getElementById("display").value = 1;
	// }

	// document.getElementById("2").onclick = function(e){
	// 	e.preventDefault();
	// 	if(mode) {
	// 		console.log("here");
	// 		valueTwo = 2;
	// 	} else {
	// 		console.log("there");
	// 		valueOne = 2;
	// 	}
	// 	document.getElementById("display").value = 2;
	// }

	// document.getElementById("3").onclick = function(e){
	// 	e.preventDefault();
	// 	console.log("three");
	// }

	// document.getElementById("4").onclick = function(e){
	// 	e.preventDefault();
	// 	console.log("four");
	// }

	// document.getElementById("5").onclick = function(e){
	// 	e.preventDefault();
	// 	console.log("five");
	// }

	// document.getElementById("6").onclick = function(e){
	// 	e.preventDefault();
	// 	console.log("six");
	// }

	// document.getElementById("7").onclick = function(e){
	// 	e.preventDefault();
	// 	console.log("seven");
	// }

	// document.getElementById("8").onclick = function(e){
	// 	e.preventDefault();
	// 	console.log("eight");
	// }

	// document.getElementById("9").onclick = function(e){
	// 	e.preventDefault();
	// 	console.log("nine");
	// }

	// document.getElementById("0").onclick = function(e){
	// 	e.preventDefault();
	// 	console.log("zero");
	// }

	

}













