import "./Display.css"
import GetWeather from "../api/service.js"
import ConvertData from "../api/conv.js"

import { useState, useEffect } from "react"

function Display() {

  // Hooks
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  // Get and convert API data
  async function ImportData() {
    try {
      const response = await GetWeather()
      const meteo = await ConvertData(response)
      setData(meteo)
    }
    catch (error) {console.log(error)}
    finally {setLoading(false)}
  }

  // Async fetching operation
  useEffect( () => {ImportData()}, [])

  // Loading logic
  if (loading) return <p class="temp-text">Loading...</p>
  if (!data) return <p class="temp-text">Could not fetch data.</p>

  // Component
  return (
    <div class="cont">
      <img class="image" src="./images/sunny.png" alt="weather state"/>
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
