let temp=document.querySelector(".temp");
let description=document.querySelector(".desc");
let humidity=document.querySelector(".humdity");
let wind=document.querySelector(".wind");
let city=document.querySelector(".city");
let icon=document.querySelector(".icon");
let input=document.querySelector(".input");
let key="50eaf077c93870cc943a0687fad20157";
const loc="Mangalore";
let t=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}`);
t.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})