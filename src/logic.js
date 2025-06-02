// Return the current meteo state
function MeteoState(temp, humid, wind, precip, clouds) {

    // Initialize states variables
    var temp_state; var humid_state; var wind_state; var precip_state; var clouds_state

    // Get temperature state
    if (temp < -5) temp_state = "extremely_cold" 
    else if (temp >= -5 && temp < 3) temp_state = "very_cold"
    else if (temp >= 3 && temp < 10) temp_state = "cold"
    else if (temp >= 10 && temp < 20) temp_state = "average"
    else if (temp >= 20 && temp < 30) temp_state = "hot"
    else if (temp >= 30 && temp < 35) temp_state = "very_hot"
    else if (temp >= 35 && temp <= 40) temp_state = "extremely_hot"
    else if (temp > 40) temp_state = "melting"

    // Get humidity state
    if (humid < 20) humid_state = "very_dry"
    else if (humid >= 20 && humid < 40) humid_state = "dry"
    else if (humid >= 40 && humid < 60) humid_state = "comfy"
    else if (humid >= 60 && humid < 80) humid_state = "humid"
    else if (humid >= 80) humid_state = "very_humid"

    // Get wind state
    if (wind < 4) wind_state = "static"
    else if (wind >= 4 && wind < 8) wind_state = "windy"
    else if (wind >= 8 && wind < 16) wind_state = "very_windy"
    else if (wind >= 16) wind_state = "stormy"

    // Get precipitation state
    if (precip == 0) precip_state = "clear"
    else if (precip > 0 && precip < 2.5) precip_state = "light_rain"
    else if (precip >= 2.5 && precip < 7.5) precip_state = "rain"
    else if (precip >= 7.5 && precip < 50) precip_state = "heavy_rain"
    else if (precip >= 50) precip_state = "storm"

    // Get cloud cover state
    if (clouds < 10) clouds_state = "clear"
    else if (clouds >= 10 && clouds < 30) clouds_state = "mostly_clear"
    else if (clouds >= 30 && clouds < 60) clouds_state = "partly_cloudy"
    else if (clouds >= 60 && clouds < 85) clouds_state = "cloudy"
    else if (clouds >= 85) clouds_state = "very_cloudy"

    // Build state object
    const meteo_state = {
        temperature: temp_state,
        humidity: humid_state,
        wind: wind_state,
        precipitation: precip_state,
        clouds: clouds_state
    }

    return meteo_state
}

const meteo = MeteoState(23.5, 71, 5, 0, 100)
console.log(meteo)