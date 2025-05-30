import "./Display.css"
import GetWeather from "../api/service.js"
import ConvertData from "../api/conv.js"

function Display() {

  async function ImportData() {
    const response = await GetWeather()
    console.log(response)
    const data = await ConvertData(response)
    return data
  }

  const data = ImportData()
  console.log(data)

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
