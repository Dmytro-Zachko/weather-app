import { FetchWeather } from "./js/fetch";
import { refs } from "./js/refs";
import { LocationMArkup, ClearLocation,WeatherError } from "./js/markup";


refs.form.addEventListener('submit', OnFormSubmit);


let cityname = '';

async  function OnFormSubmit (e) {
    e.preventDefault()
    cityname = e.target.elements.searchQuery.value.trim()

    if (cityname) {
        try {
            const response = await FetchWeather(cityname)
            console.log(response)
             if (response.current !== '') {
                refs.location.innerHTML = LocationMArkup(response)
             }  
        } catch (error) {
        refs.location.innerHTML = WeatherError(error)    
        }
        
    }
    }

