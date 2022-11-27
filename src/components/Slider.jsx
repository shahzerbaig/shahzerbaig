import React from 'react';
import { Card } from './Card';
import '../styles/slider.css';

const project = [
    {
        title:'Crypto Tracker',
        desc:' A cryptocurrency price tracker monitors the current value of different digital currencies and tokens. Many of these services provide historical data as well, allowing users to compare current prices against older values.',
        link:"https://shahzerbaig.github.io/CryptoTracker/"
    },
    {title:'Dashboard',desc:'A data dashboard is a tool many businesses use to track, analyze, and display data—usually to gain insight into the overall wellbeing of an organization, department, or specific process.'},
    {title:'Url Shortner',desc:'ShortURL is a url shortener to reduce a long link. Use our tool to shorten links and then share them, in addition you can monitor traffic statistics'},
    {title:'Chat Application',desc:'A chat application makes it easy to communicate with people anywhere in the world by sending and receiving messages in real time.'}
]
export const Slider = () => {
    return (
        <div id='slider'>
            <Card title={project[0].title} description={project[0].desc} link={project[0].link} />
            <Card title={project[1].title} description={project[1].desc} />
            <Card title={project[2].title} description={project[2].desc} />
            <Card title={project[3].title} description={project[3].desc} />
            
        </div>
    )
}
