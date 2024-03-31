import React, { useState } from 'react'
import axios from 'axios'
import Search from './Search'

export default function Weather() {
    let [temperature, setTemperature] = useState(null)
    let [description, setDescription] = useState(null)
    let [humidity, setHumidity] = useState(null)
    let [wind, setWind] = useState(null)
    let [city, setCity] = useState(null)

    let apiKey = `c6f8ef4575250284954db9f4dfa7a996`
    let celcius = 'metric'

    function getData() {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${celcius}`
        axios.get(url).then(function (response) {
            setTemperature(Math.round(response.data.main.temp))
            setDescription(response.data.weather[0].description)
            setHumidity(Math.round(response.data.main.humidity))
            setWind(response.data.wind.speed)
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        getData()
    }

    if (temperature)
        return (
            <div>
                <h1>Weather App</h1>
                <Search setCity={setCity} handleSubmit={handleSubmit} />
                <ul>
                    <li>{temperature}C°</li>
                    <li>{description}</li>
                    <li>{humidity}%</li>
                    <li>{wind}km/h</li>
                </ul>
            </div>
        )

    return (
        <div>
            <h1>Weather App</h1>
            <Search setCity={setCity} handleSubmit={handleSubmit} />
        </div>
    )
}
