const temp_area=document.querySelector('.temp');

const loc=document.querySelector('.loc');

const det=document.querySelector('.weather_det');
const search=document.querySelector('.search');


//<span id="city"></span>, <span id="country" ></span>


const apikey='dddaebdb79f9b6d3f1c14f3f7ac2c013';
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

 async function weather(City_Name){
const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City_Name}&appid=${apikey}`)
const data= await res.json();

temp_area.innerHTML=`${kelvinToCelsius(data.main.temp).toFixed(2)}°C`;

loc.innerHTML=`<span id="city">${data.name}</span> , <span id="country" >${data.sys.country}</span>`
det.innerHTML=`

 <p>It feels like: ${kelvinToCelsius(data.main.feels_like).toFixed(2)}°C</p>
  <p>WIND: ${data.wind.speed} m/s </p> 
  <p>humidity: ${data.main.humidity}% </p>

`
}



function kelvinToCelsius(temp){
 return temp-273.15;
}

search.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
weather(search.value);
      
    }
})

