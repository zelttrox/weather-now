import "./Display.css"
import "./service.js"
import GetWeather from "./service.js"

function Display() {

  var data = {
    temperature: 14,
    description: "Sunny",
    humidity: 80,
    windSpeed: 8.5
  }

  async function Response() {
    const response = await GetWeather()
    console.log(response)
  }
  Response()

  return (
    <div class="cont">
      <img class="image" src="./images/sunny.png"/>
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
          <p class="info-text"> 0m/s </p>
        </div>
      </div>
    </div>
  )
}

export default Display
