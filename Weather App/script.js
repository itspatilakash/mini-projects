const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

btn.addEventListener('click',() =>{
    let city = input.value;
    getWeather(city);
})

function getWeather(city){
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'0c88dedabf5ab1608fb9150ef66f4405'}`).then(response =>response.json()).then(data => {
      console.log(data);
      const iconCode = data.weather[0].icon;
      console.log(iconCode)
      icon.innerHTML = `<img src = "http://openweathermap.org/img/wn/${iconCode}.png" alt= "iconCode"/> `

      const weatherCity = data.name;
      const weatherCountry = data.sys.country;
      weather.innerHTML = `${weatherCity } , ${weatherCountry}`;
      weatherTemp =data.main.temp - 273.15;
      const temp = weatherTemp.toFixed(2);
      temperature.innerHTML = `${temp}°C`;

      const weatherDesc = data.weather[0].description;
      description.innerHTML = weatherDesc;

    }) 
 }
