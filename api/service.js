const api_url = "https://api.open-meteo.com/v1/forecast"

async function GetWeather(lat, long) {
    const request = `${api_url}?latitude=${lat}&longitude=${long}`
}

export default GetWeather