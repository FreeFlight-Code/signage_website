import React, { Component } from 'react';
import ads from './videoData.json';

export default function YTubeFrame (){

    const stream = ()=>{
        if(ads.length){
            return ads[0];
        } else {
            return `https://www.youtube.com/embed?playlist&list=PLvFz1VAZcZYZWb3i7xlswGDTz2WJp3MLr&autoplay=1`
        }
    }
    return(
        <iframe
            id='ytPlayer'
            title='YouTube Player'
            src={stream()}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>
    )
} 