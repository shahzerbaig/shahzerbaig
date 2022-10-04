import React from 'react'
import '../styles/footer.css'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import medium from '../assets/medium.png'
import github from '../assets/github.png'
export const Footer = () => {
    return (
        <footer>
            <div className='linkBox'>
                <a href='https://www.instagram.com/ml.factory/' rel="noreferrer" target='_blank'>
                    <img className='instagram'  alt='instagram' src={instagram}></img>
                </a>
            </div>
            <div className='linkBox'>
                <a href='https://www.linkedin.com/in/shahzer-baig-26344b1a0/' rel="noreferrer" target='_blank'>
                    <img className='linkedin' alt='linkden' src={linkedin}></img>
                </a>
            </div>
            <div className='linkBox'>
                <a href='https://medium.com/@shahzer.baig' rel="noreferrer" target='_blank'>
                    <img className='medium' alt='medium' src={medium}></img>
                </a>
            </div>
            <div className='linkBox'>
            <a href='https://github.com/shahzerbaig' id='git' rel="noreferrer" target='_blank'>
                    <img className='github' alt='github' src={github}></img>
                </a>
            </div>
        </footer>
    )
}
