
	
	// unary operators- that only have single operand
	let x = 1; 
	alert(x); 
	x = -x; // - is the uncary negation reverses the sign of a number
	alert(x); 

	//operands are the one on twhich the action is being performed

	//binay operators- ones which have 2 operands
	let y = 1;
	let z = 3;
	alert(y-x); // - is binary here as it's subtracting instead of unary where it was just changing signs

	//math operators + = * /
	// % and ** are remainder and exponentation respectively
	alert(5%2);
	alert(2**2);

	//c += 2 is same as c = c + 2
	//c -= 2 is same as c = c - 2
	//c *= 2 is same as c = c * 2

	// concatenation
	alert("hello" + "son");
	alert("1" + 2);// if any of side of concatanation is string it'll return string
	// +before a string converts it into number
	alert(2+2+'1'); // answer is 41 not 221

	// numeric conversion, unary +
	let w = -2;
	alert( +w ); // -2
	// converts non-number
	alert( +true ); // 1
	alert( +"" );   // 0
	let apples = "2";
	let banana = "3";
	alert(apples + banana);//23 binary concatenation
	// both values converted to numbers before the binary plus
	alert( +apples + +banana ); // 5

	//operator precedence
	//in order from most dope to less dope 
	// unary plus(+), unary negation(-), exponentation(**), multiplication(*), division(/), addition(+), substraction(-), assignment(=)

	//assignment, copies or stores from right to left
	let d = 2 * 2 + 1;
	alert(d); // 5
	let a = 1;
	let  b = 2;
	let c = 3 - (a = b+1); // 3-(a = 2+1) = 0
	alert(c); // 0
	//chaining assignment
	let e,f,g;
	e = f = g = 2+2; // 4
	alert(e);
	alert(f);
	alert(g);

	//modify and asign
	let n = 2;
	n += 5; // now n = 7
	n *= 3; // now n = 6

	//increment and decrement, can only be applied to variables trying them with numbers will give error
	let counter = 2;
	counter ++ ;
	alert(counter); // 3

	// bitwise operators, no need to use or remember them
	and(&)
	or(|)
	xor(^)
	not(~)
	left shift(<<)
	right shift(>>)
	zero fill right shift (>>>)

	//coma, not used mostly
	let tut = (1+2 , 3+4);
	alert(tut); // 7 because it breaks and does calculations but returns the one calculated at last
	// coma has very low precedence
	// brackets are needed  for the above thing to work,Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4. below is a usecase of comma
	for (a = 1, b = 3, c = a * b; a < 10; a++) {}

	//tricky question
		//Fix it. The result should be 3.
		let an = prompt("First number?", 1);
		let bn = prompt("Second number?", 2);
		alert(an + bn); // 12

