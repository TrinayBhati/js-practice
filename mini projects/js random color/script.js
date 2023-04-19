let main = document.querySelector(".main");
let colorText = document.getElementById("color-text");
let button = document.getElementById("btn");

let getColor = () => {
	let randomNum = Math.floor(Math.random()*16777215);
	let randomColor = `#${randomNum.toString(16)}`;
	colorText.innerText =randomColor;
	main.style.backgroundColor = randomColor;
	colorText.style.color = randomColor;
	navigator.clipboard.writeText(randomColor);
}
button.addEventListener("click", getColor);
getColor();