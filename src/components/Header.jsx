import React from 'react'
import unicorn from '../assets/unicorn.png'
import '../styles/header.css'

export const Header = () => {
    return (
        <header>
            <h1 className='name'>Shahzer Baig</h1>
            <img className='unicorn' src={unicorn} alt='unicron' ></img>
        </header>
    )
}
