import React from 'react'
import '../styles/card.css'
export const Card = (props) => {
    let title = props.title;
    let description = props.description
    return (
        <div className='card'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
