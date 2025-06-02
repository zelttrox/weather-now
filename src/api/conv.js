// Return a meteo format using given weather data
async function ConvertData(data) {

    // Initialize the meteo format
    var meteo = {
        temperature: undefined,
        description: undefined,
        humidity: undefined,
        wind: undefined,
        precipitation: undefined,
        clouds: undefined

    }

    // Get current data
    meteo.temperature = data.current.temperature_2m
    meteo.humidity = data.current.relative_humidity_2m
    meteo.wind = data.current.wind_speed_10m
    meteo.precipitation = data.current.precipitation
    meteo.clouds = data.current.cloud_cover

    return meteo
}

export default ConvertData
