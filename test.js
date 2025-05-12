import { fetchWeatherApi } from 'openmeteo'
import GetWeather from "./api/service.js"

async function RetrieveData() {

    const response = await GetWeather()
    
    const utcOffsetSeconds = response.utcOffsetSeconds()
    const timezone = response.timezone()
    const timezoneAbbreviation = response.timezoneAbbreviation()
    const latitude = response.latitude()
    const longitude = response.longitude()
    const hourly = response.hourly()

    const weatherData = {
        hourly: {
            time: [...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval())].map(
                (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
            ),
            temperature2m: hourly.variables(0).valuesArray(),
        },
    } 
    
    console.log(weatherData.hourly.time[0].toISOString(), "temp:", weatherData.hourly.temperature2m[0])
}

RetrieveData()