let myInput = document.getElementById("myInput");
let items = document.querySelectorAll(".para");
let searched =""
myInput.addEventListener("keyup", function oneKeyup(e){
	searched = e.target.value.toUpperCase();
	items.forEach((element) =>{
		
		if(element.innerText.toUpperCase().includes(searched)){
			element.style.display = "";
		}
		else{
			element.style.display = "none";
		}
	})
});
