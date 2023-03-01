
	
	// function keyword then name of function then parameters comma seperated inside the parenthesis then curly braces and function code there
	/*function name(parameter1 , parameter2 , parameterN){
		//body
	}*/
	// calling is pretty simple just use the name name();
	function show(from, text){
		alert (from + ":" + text);
	}
	show("ann", "Hey");
	// the values passed in parameters are called arguments here ann and hey are arguments
	function checKAge(age){
		if(age>=18){
			return true;
		}
		else{
			return false;
		}
	}
	let age = prompt("How old are you?", "");
	if(checKAge(age)){
		alert("LFG");
		}
		else{
			alert("Hold up");
		}








