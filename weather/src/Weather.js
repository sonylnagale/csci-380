import { useEffect, useState } from 'react';
import env from "react-dotenv";

const { OPEN_WEATHER_MAP_API_KEY } = env

const Weather = () => 
{

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.7707237&lon=-73.9914229&appid=${OPEN_WEATHER_MAP_API_KEY}&units=imperial`)

    useEffect(() => 
    {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.7707237&lon=-73.9914229&appid=${env.OPEN_WEATHER_MAP_API_KEY}&units=imperial`)
            .then(data => data.json())
            .then(json => {
                console.log(json)
            })

    }, [])

    const [weather, setWeather] = useState({})

    const [latlon, setLatlon] = useState
    ({
            latitude: undefined,
            longitude: undefined
    })

    return (
        <>
            
        </>
    )
}

export default Weather;