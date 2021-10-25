import { useEffect, useState } from 'react'
import env from "react-dotenv";

const { OPEN_WEATHER_MAP_API_KEY } = env

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