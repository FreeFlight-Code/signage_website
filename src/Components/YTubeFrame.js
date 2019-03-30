import React, { Component } from 'react';

/*
*Sample obj from ads
*
*   {
*       name: "company_name",                                   // string name to maybe scroll or something in the future    
*       url: "www.youtube.com/embed/adsgfkjhsfa?autoplay=1",    // string string representing direct url to video
*       adsPerDay: 3                                            // number for # of views in a day
*       timeRequested: 1230                                     // number for military time
*   }
*
*/

export default class YTubeFrame extends Component {
    constructor(props){
        super(props)
        this.state = {
            defaultVideo: `https://www.youtube.com/embed?playlist&list=PLvFz1VAZcZYZWb3i7xlswGDTz2WJp3MLr&autoplay=1&index=5`,
            currentVideo: ``
        }
    }

    render(){

        return(
            <iframe
                id='player'
                title='YouTube Player'
                src={this.state.currentVideo || this.state.defaultVideo}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        )
    }
} 