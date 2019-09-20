import React from 'react';

/*
*Sample obj from ads
*
*   {
*       name: "company_name",                                   // string name to maybe scroll or something in the future
*       url: "www.youtube.com/embed/adsgfkjhsfa?autoplay=1",    // string string representing direct url to video
*       adsPerDay: 3                                            // number for # of views in a day
*       timeRequested: 1230                                     // number for military time
*   }
*https://final.simustream.com/watch/ryoulive/fd188ce355638986373ef230fbb28fd8
*/

export default function YTubeFrame (props) {

    const { url } = props.video;
    return(
        <iframe
            id='player'
            title='YouTube Player'
            src={url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            autoPlay="1"
            >
        </iframe>
    )
}