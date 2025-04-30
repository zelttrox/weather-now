import service from "../api/service"

function App() {

    return (
        <>
        <h1> Welcome to weather now </h1>
        <p> {service.GetWeather(43.610767, 3.876716)} </p>
        </>
    )
}

export default App
