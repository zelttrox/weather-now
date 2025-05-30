import GetWeather from "./service.js";

// Return a meteo format using given weather data
async function ConvertData(data) {

    // Initialize the meteo format
    var meteo = {
        temperature: undefined,
        description: undefined,
        humidity: undefined,
        wind: undefined
    }

    // Genereate current time
    var current_time = new Date()
    current_time = current_time.toISOString().slice(0, 14)+"00"

    // Get current data
    for (let i = 0; i < data.hourly.time.length; i++) {
        const time = data.hourly.time[i];
        if (time == current_time) {
            meteo.temperature = data.hourly.temperature_2m[i]
            meteo.humidity = data.hourly.relative_humidity_2m[i]
            meteo.wind = data.hourly.wind_speed_10m[i]
        }  
    }
    return meteo
}

export default ConvertData