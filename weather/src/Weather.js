import { useEffect, useState } from 'react'
import env from "react-dotenv";
import Spinner from './Spinner';
import "./Weather.css"

console.log(env)

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
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.7707237&lon=-73.9914229&appid=${OPEN_WEATHER_MAP_API_KEY}&units=imperial`)
            .then(data => data.json())
            .then(json => setWeather(json))

    }, [latlon])

    return (
        <div className="weather">
            {weather?.main &&
                <>
                    <p className="date">{new Date(weather.dt * 1000).toLocaleString()}</p>
                    <p className="temperature"><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />{weather.main.temp} and {weather.weather[0].description}</p>
                    <h2></h2>
                </>
            }
            {
                !weather?.main &&
                <>
                    <Spinner />
                </>
            }
        </div>
    )
}

export default Weather