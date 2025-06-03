// Return the current meteo state
function MeteoState(temp, humid, wind, precip, clouds) {

    // Initialize states variables
    var state = undefined

    // Storm
    if (wind >= 16 && precip >= 50 && humid >= 60) state = "storm"
    // Sun and clouds
    else if (clouds >= 30 && clouds < 60) state = "small_clouds"
    // Cloudy
    else if (clouds >= 85) state = "cloudy"
    // Sunny
    else if (clouds < 10 && temp >= 14) state = "sunny"
    // Light rain
    else if (precip > 0 && precip < 2.5 && humid >= 60) state = "light_rain"
    // Heavy rain
    else if (precip > 7.5 && precip < 50 && humid >= 80) state = "heavy_rain"

    console.log(temp, humid, wind, precip, clouds)
    console.log("output:", state)
    return state
}

export default MeteoState