import React from 'react'
import './Search.css'

export default function Search(props) {
    function updateCity(event) {
        event.preventDefault()
        props.setCity(event.target.value)
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <input
                className="input"
                placeholder="Enter a city"
                type="text"
                onChange={updateCity}
            />
            <input className="search-btn" type="submit" value="search" />
        </form>
    )
}
