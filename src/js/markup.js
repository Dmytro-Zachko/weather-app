import { refs } from "./refs";

function LocationMArkup({ location: { name, country, localtime }, 
current: {last_updated,temp_c, condition: {text,icon}}}) { 
  const markup =  `
  <div class="location"> 
<h1 class="name-info ">${name}</h1>
<img src= "${icon}" alt="${text}" width="80px" height="80px">
<p class="weather-info"> ${text}</p>  
<p class="temperature-info"><b class="info">Temperature:</b> ${temp_c}°C</p> 
<p class="country-info"><b class="info">Country:</b> ${country}</p> 
<p class="time-info"><b class="info">Local Time:</b> ${localtime}</p> 
<p class="update-info"> <b class="info">Last Updated:</b> ${last_updated}</p> 
</div> 
`;    
return markup
}

function WeatherError() {
  const clear =  `
  <div class="location"> 
<h1 class="name-info">No matching location found.</h1>
</div> 
`;    
return clear
}

function ClearLocation() {
    refs.location.innerHTML = ''
}

    export {LocationMArkup, ClearLocation,WeatherError}