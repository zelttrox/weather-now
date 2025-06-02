const api_url = "https://api.open-meteo.com/v1/forecast"

const api_params = {
	"latitude": 43.596546,
	"longitude": 3.9237431,
	"current": "temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,cloud_cover"
}

const url = (base_url, params) =>
    base_url + "?" + Object.entries(params).map(([k, v]) => `${k}=${v}`).join("&")


async function GetWeather() {
    try {
        const response = await fetch(url(api_url, api_params))
        return response.json()
    }
    catch (error) {
        console.error(`Error while fetching`)
    }
}

export default GetWeather
