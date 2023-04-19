let url = "https://superheroapi.com/api.php";
let key = "1646172935846068";
let inputHero = document.getElementById("inputHero");
let random = ()=>{
	return Math.floor(Math.random()*731)+1;
}
let superHero = (id) => {
	let heroId = random();

	fetch(`${url}/${key}/${heroId}`)
	.then((response) => response.json())
	.then((json) => {
		document.getElementById("heroName").innerText = json.name;
		// let intel = `<h1>🧠 Intelligence : ${json.powerstats.intelligence}</h1>`
		// document.getElementById("heroStats").innerText = `💪 power : ${json.powerstats.power}`;
		let stats = getStats(json);
		document.getElementById("hero").innerHTML =`<img src="${json.image.url}" >${stats}`;
		

	});
};
	let statemoji = {
		intelligence:"🧠",
		strength: "💪",
		speed: "⚡",
		durability: "🏋️",
		power: "🗿",
		combat: "⚔️",
	}
	let getStats = (character)=>{
		let stati  = Object.keys(character.powerstats).map(stat =>{
			return `<p>${statemoji[stat]} ${stat} : ${character.powerstats[stat]}</p>`
		}) 
		console.log(stati.join(""));
		return stati.join("");
	}
document.getElementById("btn").addEventListener("click" , superHero);
let search= ()=>{
	fetch(`${url}/${key}/search/${inputHero.value}`).then(response => response.json()).then(json =>{
		let hero = json.results[0];
		document.getElementById("hero").innerHTML =`<img src="${hero.image.url}" >`;
		document.getElementById("heroName").innerText = hero.name;
		document.getElementById("heroStats").innerText = `power : ${hero.powerstats.power}`;
	});
}
document.getElementById("btnTwo").addEventListener("click" , search);