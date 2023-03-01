
	
	//Greater/less than or equals: a >= b, a <= b
	// equals a == b, single equal is addignment double is equality check
	// not equals a != b
	// result is boolean of any coparision
	alert( 2 > 1 );  // true (correct)
	// can be donw using variable
	let check = (5>8);
	alert(check);

	// striing comparision
	// checked letter by letter like dictionary
	alert( 'Z' > 'A' ); // true
	alert( 'Glow' > 'Glee' ); // true
	alert( '2' > 1 ); // true, string '2' becomes a number 2

	// strict equality, to prevent below outcomes which are not quite correct we use ===
	alert( 0 == false ); // true
	alert( '' == false ); // true
	// === or the strict equality operator checks without type conversion
	alert( 0 === false ); // false, because the types are different
	//There is also a “strict non-equality” operator !== analogous to !=
	alert(null === undefined); // false
	alert(null == undefined); // true
	//undefined shouldn’t be compared to other values

