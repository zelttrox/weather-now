import { useState, useEffect } from "react";

function App() {

    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("oeziud");
            setTime(prevTime => prevTime + 10);
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <>
            <h1> Welcome to weather now </h1>
            <p> {time} </p>
        </>
    )
}

export default App
