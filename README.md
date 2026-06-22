How fetch is implemented here 
..........................
let t=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}`);
t.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
Calling response.json() converts the JSON response into a JavaScript object. Since this conversion also takes time, response.json() returns another Promise.

The second .then() runs after the JSON has been successfully converted.

.then((data) => {
    console.log(data);
})

Here, data is the actual JavaScript object containing the weather information returned by the API. You can access values such as the city name, temperature, humidity, weather description, wind speed, and more using this object.
JavaScript Program 
 ▼ fetch(URL) 
    ▼ HTTP GET Request Sent 
     ▼ OpenWeatherMap Server 
      ▼ Server Processes Request 
        ▼ JSON Response Returned 
         ▼ Response Object 
           response.json() 
            ▼ JavaScript Object (data) 
              ▼ Use the Weather Information