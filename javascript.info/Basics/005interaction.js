
	//alert
	alert("Hello");
	//The mini-window with the message is called a modal window

	//prompt
	//result = prompt(title, [default]); 
	// title text to show, default second parameter, the user enters here
	// shows modal window but with text and an input field for the visitor, and ok ancel button
	// whatever the user enters we can store it as well
	let name = prompt("What is your name?", "enter name here");
	alert(`Hello ${name}`);
	let test = prompt("test") // second parameter is optional or ("test",'')

	//confirm
	let isMale = confirm("Are you male");
	alert(isMale); // true if ok is passed else false
