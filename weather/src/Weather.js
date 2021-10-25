import { useEffect, useState } from 'react'
import env from "react-dotenv";

console.log(env)

const Weather = () => {

    const [weather, setWeather] = useState({})
    const [latlon, setLatlon] = useState({
        latitude: undefined,
        longitude: undefined
    })

    return (
        <>
            
        </>
    )
}

export default Weather