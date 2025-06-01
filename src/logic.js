function MeteoState(temp, humid, wind) {

    // Initialize states variables
    var temp_state; var humid_state; var wind_state

    // Get temperature state
    switch (temp) {
        case temp < -5 :
            temp_state = "extremely_cold"
        case temp >= -5 && temp <= 3 :
            temp_state = "very_cold"
        case temp >= 3 && temp <= 10 :
            temp_state = "cold"
        case temp >= 10 && temp <= 20 :
            temp_state = "average"
        case temp >= 20 && temp <= 30 :
            temp_state = "hot"
        case temp >= 30 && temp <= 35 :
            temp_state = "very_hot"
        case temp >= 35 && temp >= 40 :
            temp_state = "extremely_hot"
        case temp > 40 :
            temp_state = "melting"
    }
}
