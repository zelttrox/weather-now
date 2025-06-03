import "./Display.css"
import GetWeather from "../api/service.js"
import ConvertData from "../api/conv.js"
import MeteoState from "../logic.js"

import { useState, useEffect } from "react"

function Display() {

  // Hooks
  const [data, setData] = useState(null)
  const [state, setState] = useState("none")
  const [loading, setLoading] = useState(true)

  var meteo
  var meteo_logo
  var meteo_text

  // Get and convert API data
  async function ImportData() {
    try {
      const response = await GetWeather()
      meteo = await ConvertData(response)
      setData(meteo)
    }
    catch (error) {console.log(error)}
    finally {setLoading(false)}
  }

  // Get meteo state using data
  async function GetState() {
    if (meteo != null) {
    const meteo_state = MeteoState(meteo.temperature, meteo.humidity, meteo.wind, meteo.precip, meteo.clouds)
    meteo_logo = `./images/${meteo_state}.png`
    meteo_text = meteo_state.replace("_", "")
    console.log(meteo_logo, meteo_text)
    }
    else console.log("Could not find data")
  }

  // Async fetching operations
  useEffect( () => {ImportData(); GetState()}, [])

  // Loading logic
  if (loading) return <p class="temp-text">Loading...</p>
  if (!data) return <p class="temp-text">Could not fetch data.</p>

  // Component
  return (
    <div class="cont">
      <img class="image" src={`${meteo_logo}`} alt="weather state"/>
      <div class="cont-temp">
        <p class="temp-text"> {`${data.temperature}°C`} </p>
      </div>
      <p class="desc-text"> {data.description} </p>
      <div class="cont-infos">
        <div class="cont-info">
        <i class="fa-solid fa-droplet"></i>
          <p class="info-text"> {`${data.humidity}%`} </p>
        </div>
        <div class="cont-info">
        <i class="fa-solid fa-wind"></i>
          <p class="info-text"> {`${data.wind}m/s`} </p>
        </div>
      </div>
    </div>
  )
}

export default Display
