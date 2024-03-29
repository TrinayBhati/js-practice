

		//8 basic types of data types
		var message = "hello";
		message = 123456;
		// can initilize variable with anything n turn it to anything these types of programming languages are called "dynamically typed"

		//numbers -primitive
		//int and float comes under this remmber no seperate type like java
		var number = 123;
		number = 1.123;
		// beside int and float there are some other values like infinity, -infinity, NaN inside number datatype
		alert(Infinity);
		alert(1/0);
		alert(NaN /2); //NaN is sticky like a computational error
		alert("not a number" + 1);
		alert(NaN * 5); // only NaN ** 0 = 1
		// number type can store integers upto 2^53 -1 or less than -2^53-1
		// for numbers bigger or smaller than these we got BigInt
		const BigInt = 123456n; // n at the end of an integer means it's BigInt this can be waay larger or smaller depending on use tho rarely used
		
		//string -primitive
		// strings are surrounded with double quotes
		var str = "hello";
		var str2 = "Surprise";
		var phrase =`tick tock motherfo ${str}`;
		// three types of quotes 1."" 2.'' 3.``
		//double and single are basically similar no particular difference but backticks are extended functionally quotes. for example
		var name = "John";
		alert(`hello, ${name}!`); // this is how we embed another variable inside by using backticks
		alert(`result is ${ 2+5}`);
		// embeding and stuff only works with backticks``

		//boolean -primitive
		//logical type like true or false
		var nameFieldCheck = true; // meaning yes is checked
		var ageFieldCheck = false; // meaning not checked
		var isGreater = 4>1; // also used to compare 
		alert(isGreater);

		//null 
		//does not belong anywhere means nothing, reference to non existing object or null pointer
		var age = null;
		alert(age);

		//undefined value
		// meaning value not assigned also is a seperate type
		var page;
		alert(page);
		// can explicitly assign undefined also, but not used 

		//object and symbols
		// objects not primitive as it can store collections of data unlike strings number and stuff which can only contain a single thing.
		// symbol type use to create unique identifiers for objects

		//typeof operator
		// returns the type of the datatype used
		//syntax can be typeof x or typeof(x)
		alert(typeof undefined);
		alert(typeof 0);
		alert(typeof 10n);
		alert(typeof true);
		alert(typeof "boo");
		alert(typeof Symbol("id"));
		alert(typeof alert); // this is function
		alert(typeof Math); // and null as well shows object tho it's an error in null's case

		alert("Hello");
	//The mini-window with the message is called a modal window

	result = prompt(title, [default]); // title text to show, default second parameter, the user enters here
	// shows modal window but with text and an input field for the visitor, and ok ancel button
	// whatever the ser enters we can store it as well
	let name = prompt("What is your name?", [name here]);
	alert(`Hello ${name}`);


		
//number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
//bigint for integer numbers of arbitrary length.
//string for strings. A string may have zero or more characters, there’s no separate single-character type.
//boolean for true/false.
//null for unknown values – a standalone type that has a single value null.
//undefined for unassigned values – a standalone type that has a single value undefined.
//symbol for unique identifiers.
//And one non-primitive data type:
//object for more complex data structures.
//The typeof operator allows us to see which type is stored in a variable.

//Usually used as typeof x, but typeof(x) is also possible.
//Returns a string with the name of the type, like "string".
//For null returns "object" – this is an error in the language, it’s not actually an object.		
