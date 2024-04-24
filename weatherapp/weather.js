let apiurl = "https://api.openweathermap.org/data/2.5/weather?&appid=fe81772b47567599eb4eb99a6348ce65&units=metric";
let searchbox = document.getElementById("searchbox");
let searchbtn = document.getElementById("searchbtn");
let weatherimg=document.getElementById("weatherimg");
let places=document.getElementById("places");
let deets=document.getElementById("deets");
let invalidcity=document.getElementById("invalidcity")
places.style.display = "none";
deets.style.display = "none";

async function checkweather(city) {
    const response = await fetch(apiurl + "&q=" + city); 
    if(response.status==404){
        invalidcity.style.display="block";
        return;
    }
    else{   
        const data = await response.json();

    let weatherplace = document.getElementById("weatherplace");
    weatherplace.textContent = data.name;

    let weatherdegree = document.getElementById("weatherdegree");
    weatherdegree.textContent = Math.round(data.main.temp) + "°C";

    let weatherhumid = document.getElementById("weatherhumid");
    weatherhumid.textContent = data.main.humidity + "%";

    let windspeed = document.getElementById("windspeed");
    windspeed.textContent = data.wind.speed + " km/h"; // corrected unit

    if(data.weather[0].main=="Clouds"){
        weatherimg.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherimg.src="images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherimg.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherimg.src="images/mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherimg.src="images/rain.png";
    }
    else {
        weatherimg.src="images/snow.png";
    } 
    places.style.display="block";
    deets.style.display="block";
    invalidcity.style.display="none";
    }
    }

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})


