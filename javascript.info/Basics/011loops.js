
	
	//while(condition){}
	// if(begin ; condition ; step){}
	// do{} while(condition);

	//break 
	// when we use break it breaks the loop entirely 

	// continue
	// when we use continue it just skips the particular iteration n does rest as is

	// in order to break out of the entire loop not only the inner loop we use label, used before loop with colon
	outer: for(let i = 0; i< 3 ; i++){
		for(let j=0; j < 3 ;j++){
			let input = prompt(`value at cordinates (${i},${j})`, "");
			if(input == "" || input == null){break outer;}
		}
	}

