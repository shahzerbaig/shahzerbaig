import React from 'react'
import '../styles/card.css'
import { useNavigate } from 'react-router';
export const Card = (props) => {
    const navigate = useNavigate();
    let title = props.title;
    let description = props.description
    return (
        <div className='card'>
            <a href={props.link} target="_blank">
                <h3>{title}</h3>
                <p>{description}</p>
            </a>
            
            
        </div>
    )
}
