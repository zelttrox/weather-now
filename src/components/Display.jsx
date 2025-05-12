import "./Display.css"

function Display() {
  return (
    <div class="cont">
      <img class="image" src="./images/sunny.png"/>
      <div class="cont-temp">
        <p class="temp-text"> 0°C </p>
      </div>
      <p class="desc-text"> Sunny </p>
      <div class="cont-infos">
        <div class="cont-info">
        <i class="fa-solid fa-droplet"></i>
          <p class="info-text"> 0% </p>
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
