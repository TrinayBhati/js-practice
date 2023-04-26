   //fetch data from api
async function getWeatherData(input){
  "delhi400e8fc074b1e43c0a10e7852fdad7be"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=";
  let apiKey = "400e8fc074b1e43c0a10e7852fdad7be";
  let response = await fetch(`${url}${input}&appid=${apiKey}&units=imperial`);
  let data = await response.json();
  showWeatherData(data);
}

    // event listner and calling fetch with input
function searchCity(){
  let cityInput = document.getElementById("city-input").value;
  getWeatherData(cityInput);

}    

const showWeatherData = (weatherData) =>{
  let cityName = document.getElementById("city-name");
  let weatherType = document.getElementById("weather-type");
  let temp = document.getElementById("temp");
  let minTemp = document.getElementById("min-temp");
  let maxtemp = document.getElementById("max-temp");

  cityName.innerText = weatherData.name;
  weatherType.innerText = weatherData.weather[0].main;
  temp.innerText = weatherData.main.temp;
  minTemp.innerText = weatherData.main.temp_min;
  maxtemp.innerText = weatherData.main.temp_max;


}
