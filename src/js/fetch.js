

function FetchWeather(cityname) {
    const APIkey = '279798b48cdc46e9862122600232503'
return fetch(`https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${cityname}&aqi=yes`).then(responce => responce.json())
 
}

export { FetchWeather }