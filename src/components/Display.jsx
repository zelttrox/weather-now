import "./Display.css"

function Display() {
  return (
    <>
    <img class="disp-image"> </img>
    <div class="disp-cont">
        <p class="disp-temp"> 0°C </p>
        <button class="disp-btn"> F° </button>
    </div>
    <p class="disp-desc"> climate </p>
    <div>
        <div>
            <img> </img>
            <p> </p>
        </div>
        <div>
            <img> </img>
            <p> </p>
        </div>
    </div>
    </>
  )
}

export default Display
