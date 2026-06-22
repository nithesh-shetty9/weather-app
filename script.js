let temp=document.querySelector(".temp");
let description=document.querySelector(".desc");
let humidity=document.querySelector(".humdity");
let wind=document.querySelector(".wind");
let icon=document.querySelector(".icon");
let input=document.querySelector("#search");
let key="50eaf077c93870cc943a0687fad20157";
let weatherIcon=document.querySelector(".weather-icon");
input.addEventListener("keypress",(e)=>{
    if(e.key==="Enter")
    {        const loc=input.value;
        weather(loc);
    }
})
icon.addEventListener("click",()=>{
    const loc=input.value;
    weather(loc);
})
async function weather(loc)
{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}`;
    const data= await fetch(url).then((response)=>response.json());
    console.log(data);
    temp.innerHTML=`${Math.round(301.71-273.15)}°C`;
    description.innerHTML=data.weather[0].description;
    humidity.innerHTML=`${data.main.humidity}%`;
    wind.innerHTML=`${data.wind.speed} Km/H`;
    switch(data.weather[0].main)
    {
        case "Clouds":
            weatherIcon.src="clouds.png";   
            break;
        case "Clear":
            weatherIcon.src="clear.png";
            break;
        case "Rain":
            weatherIcon.src="rain.png";
            break;
        case "Drizzle":
            weatherIcon.src="drizzle.png";
            break;
        case "Mist":
            weatherIcon.src="mist.png";
            break;
    }

}