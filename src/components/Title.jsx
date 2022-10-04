import React from 'react'

export const Title = ({name,desc}) => {
    return (
        <article className='project__one'>
            <h4>{name}</h4>
            <p>{desc}</p>
            
        </article>
    )
}
