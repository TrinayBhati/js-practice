
	
	//string conversion
	let value = true; // this is boolean now
	alert(typeof value);
	value = String(value); // now it became string
	alert(typeof value);

	//numeric conversion
	alert("6"); // if we put number in quotes it becomes string
	alert("6" / "3"); // converted to number automaticaly when mathematical functions and expression used
	let str = "123"
	alert(typeof str)
	let num = Number(str);
	alert(typeof num);
	// in order to explicitly turn a string to a number we have to use Number(value)
	// if the value inside Number is not valid number it'll show NaN
	let page = Number("stfu");
	alert(page);
	//numeric conversion rules
	//undefined becomes NaN, null becomes 0, true and false becomes 1 and 0, string becomes number or NaN if not a number also spaces are removed not considered.
	alert(Number("     123  "));
	alert(Number("123z"));
	alert(Number(true));
	alert(Number(null));
	
	//boolean conversion
	//explicitly can be done with call to Boolean(value)
	//0, null, empty string, undefined, NaN, becomes false rest is true
	alert(Boolean("zero"));
	alert(Boolean("hello"));
	alert(Boolean(0));
	alert(Boolean(1));

