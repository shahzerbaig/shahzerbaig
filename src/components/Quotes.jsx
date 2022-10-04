import React from 'react';
import '../styles/quotes.css'
export const Quotes = ()=>{
    return(
        <div className='quotes'>
            <div className='quote'>
                <div className='quote__row1'>
                    <h4>Ryan Dhal</h4>
                    <p>21/08/2012</p>
                </div>
                <div className='quote__row2'>
                    <blockquote>"You can never understand everything. But, you should push yourself to understand the system."</blockquote>
                </div>
            </div>
            <div className='quote'>
                <div className='quote__row1'>
                    <h4>Aditiya Tripathi</h4>
                    <p>21/08/2021</p>
                </div>
                <div className='quote__row2'>
                    <blockquote>"Time,Tide and Javascript waits for no one."</blockquote>
                </div>
            </div>
        </div>
    )
}