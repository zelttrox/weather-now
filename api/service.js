import { fetchWeatherApi } from 'openmeteo'

const api_url = "https://api.open-meteo.com/v1/forecast"

const api_params = {
	"latitude": 43.596546,
	"longitude": 3.9237431,
	"hourly": "temperature_2m,relative_humidity_2m,wind_speed_10m"
}

async function GetWeather() {
    try {
        const response = await fetchWeatherApi(api_url, api_params)
        return response[0]
    }
    catch (error) {
        console.error(`Error while fetching request ${request}`)
    }
}

export default GetWeather