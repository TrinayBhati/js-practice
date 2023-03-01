
	// if
	let year = prompt("what's your year of birth", "enter year");
	if(year == 2000){
		alert("hurray same as me");
	}
	// if() statement converts the result in boolean, n moves on ahead weather to implement the curly ones or move to next
	// we can also pass pre evaluated boolan
	let name = prompt("enter your name", "enter here");
	let condition = (name == "trinay");
	if(condition){
		alert("dammn");
	}

	// else
	let age = prompt("how old are you?" , "");
	if(age < 18){
		alert("dammn son");
	}
	else{
		alert("jeez oldie");
	}

	// ? conditional statements
	// let result = consition check ? value1(is condition is true) : value2(if condition is flase)
	let number = prompt("enter age again" , "")
	let access = (number > 18) ? alert("alowed") :alert("nuh uh");
	// nested conditionals
	let page = prompt("enter profits" , "");
	let message = (page < 3) ? "noob": (page < 18) ? "I see" :"gtfo";
	alert(message);



