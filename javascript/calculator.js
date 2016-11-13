window.onload = function(){

	var runningTotal = 0;
	var mode = "clear";
	var justSelectedMode = "false";
	var justSelectedClear = "true";
	var numberButtons = document.getElementsByClassName("numbers");

	function getDisplayValue(){
		return parseFloat(document.getElementById("display").value);
	}

	function setDisplayValue(value){
		document.getElementById("display").value = value;
	}

	function setDisplayValueAppend(value){
		document.getElementById("display").value += value;
	}

	function calculate(){
		switch (mode) {
		    case "divide":
		        runningTotal = runningTotal / getDisplayValue();
		    	setDisplayValue(runningTotal);
		        break;
		    case "multiply":
		        runningTotal = runningTotal * getDisplayValue();
		    	setDisplayValue(runningTotal);
		    	break;
		    case "subtract":
		        runningTotal = runningTotal - getDisplayValue();
		    	setDisplayValue(runningTotal);
		        break;
		    case "add":
	    		runningTotal = runningTotal + getDisplayValue();
	    		setDisplayValue(runningTotal);
	        	break;
		    case "clear":
		    	runningTotal = getDisplayValue();
		    	break;
		}
	}

	for (var i=0; i<numberButtons.length; i++){
		numberButtons[i].onclick = function(e){
			e.preventDefault();
			if (mode == "clear" && justSelectedClear == "true" || justSelectedMode == "true") {
				setDisplayValue(this.value);	
				justSelectedMode = "false";
				justSelectedClear = "false";
			} else {
				setDisplayValueAppend(this.value);	
			}
		}
	}

	document.getElementById("divide").onclick = function(e){
		e.preventDefault();
		calculate();
		mode = "divide";
		justSelectedMode = "true";
	}

	document.getElementById("multiply").onclick = function(e){
		e.preventDefault();
		calculate();
		mode = "multiply";
		justSelectedMode = "true";
	}

	document.getElementById("subtract").onclick = function(e){
		e.preventDefault();
		calculate();
		mode = "subtract";
		justSelectedMode = "true";
	}

	document.getElementById("add").onclick = function(e){
		e.preventDefault();
		calculate();
		mode = "add";
		justSelectedMode = "true";
	}

	document.getElementById("equals").onclick = function(e){
		e.preventDefault();
		calculate();
		mode="clear";
		justSelectedClear = "true";
	}

	document.getElementById("clear").onclick = function(e){
		e.preventDefault();
		mode="clear";
		setDisplayValue(0);
		justSelectedClear = "true";
	}	

}













