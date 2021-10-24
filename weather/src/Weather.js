import { useEffect, useState } from 'react'
import env from "react-dotenv";

const { OPEN_WEATHER_MAP_API_KEY } = env
console.log(OPEN_WEATHER_MAP_API_KEY)

const Weather = () => {

    const [weather, setWeather] = useState({})
    const [latlon, setLatlon] = useState({
        latitude: undefined,
        longitude: undefined
    })

    useEffect(() => {


        try {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((location) => {
                    console.log(location)
                    setLatlon({
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude
                    })
                });
            }
        } catch (e) {
            console.error(e)
        }
    }, [])

    useEffect(() => {
        const { latitude, longitude } = latlon
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_MAP_API_KEY}&units=imperial`)
            .then(data => data.json())
            .then(json => setWeather(json))

    }, [latlon])

    return (
        <>
            {weather?.main && 
                <>
                    <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
                    <h1>{weather.main.temp}</h1>
                    <h2>{weather.weather[0].description}</h2>
                </>
            }
        </>
    )
}

export default Weather