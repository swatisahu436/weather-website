const input_box=  document.getElementById("input_box");
const Searchbutton=  document.getElementById("Searchbutton");
const weather_img=  document.getElementById("weather_img");
const temp=  document.getElementById("temp");
const description=  document.getElementById("description");
const humidity=  document.getElementById("   humidity");
const winds=  document.getElementById("winds");
    
async function checkWeather(city){
    const api_key="476a40774ff15e4e889c18315300de46 ";
    const url= "https://api.openweathermap.org/data/2.5/weather?q={city}&appid=$={api_key}";
     
    const weather_data=await fetch('${url}').then(response=> response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
 
    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    winds.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
         case 'Cloudy':
            weather_img.src = "cloudy.jpg";
            break;
        case 'sunny':
            weather_img.src = "sunny.png";
            break;
        case 'rain':
            weather_img.src = "rain.png";
            break;
        case 'snow':
            weather_img.src = "snow.png";
            break;
        case 'sunnycloud':
            weather_img.src = "sunnycloud.jpg";
            break;

    }

    console.log(weather_data);
}



Searchbutton.addEventListener('click',()=>{
   checkWeather(input_box.value);
});