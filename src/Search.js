import React from 'react'

export default function Search(props) {
    function updateCity(event) {
        event.preventDefault()
        props.setCity(event.target.value)
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" onChange={updateCity} />
            <input type="submit" value="search" />
        </form>
    )
}
