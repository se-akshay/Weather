const apiKey="f72f0293c312cbe162c7d2dded735b3b";
const URL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const cityName=document.querySelector(".city");
const temp=document.querySelector(".temp");
const humidity=document.querySelector(".humidity");
const wind_speed=document.querySelector(".wind");
const searchBox=document.querySelector(".search input");
const btn=document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const changeIcon= (x) =>{
    if(x == "Clear"){
        weatherIcon.src="imgs/clear.png";
    }else if(x == "Coud"){
        weatherIcon.src="imgs/cloud.png";
    }else if(x == "Rain"){
        weatherIcon.src="imgs/rain.png";
    }else if(x == "Drizzle"){
        weatherIcon.src="imgs/drizzle.png";
    }else if(x == "Mist"){
        weatherIcon.src="imgs/mist.png";
    }else if(x == "Clear"){
        weatherIcon.src="imgs/clear.png";
    }
}

async function checkWeather(city){
    const response = await fetch(URL + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        const data = await response.json();
        console.log(data);
        cityName.innerHTML=data.name;
        temp.innerHTML=Math.round(data.main.temp) + "°C";
        humidity.innerHTML=data.main.humidity + "%";
        wind_speed.innerHTML=data.wind.speed + " km/h";

        //-----------Updating Weather Icon----------
        changeIcon(data.weather[0].main);

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="block";
    }  
}




btn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

