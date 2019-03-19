import React, { Component } from 'react';

import suiteData from "./data.json";
import videoData from "./videoData.json";
import './UpperPage.css'
const upper = suiteData.upper;
const lower = suiteData.lower;


class UpperPage extends Component {

    imageMap = {
        upper: {backgroundImage: "url(https://www.frontrange.edu/images/default-source/default-album/campus-maps/lc-redcloud-peak.jpg?sfvrsn=2b9704a7_10)"},
        lower: {backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLsehmf34QmCGXmA6wzbByzduV1PIvCR5pB-MGkAY3weifwXU)"}
    }
    


    render() {
        let location = window.location.pathname.replace(/[^a-zA-Z]+/g, '');
        let upstairsTV = (function(){if(location!=="lower"){return true}})();
        const isRotated = (()=>{
            if (!upstairsTV){
                return {
                    transform: "rotate(90deg)"
                }
            } else return null
        })()
        const upperSuites = ()=>{
            if (upper.length){
                return (upper.map((el, i)=>{
                    return (
                        <div className='suite' key={`UpperSuite_${i}`}>
                            <span className='suiteName'>{el.name}</span>
                            <span className='suiteNumber'>{el.suite}</span>
                            
                        </div>
                    )
                }))
            } else return (
                <div>no data</div>
            )
        }
        const lowerSuites = ()=>{
            if (lower.length){
                return (lower.map((el, i)=>{
                    return (
                        <div className='suite' key={`LowerSuite_${i}`}>
                            <span className='suiteName'>{el.name}</span>
                            <span className='suiteNumber'>{el.suite}</span>
                            
                        </div>
                    )
                }))
            } else return (
                <div>no data</div>
            )
        }
    return (
      <div className="UpperPageContainer">
        <div className='mapSide' style={isRotated}>
            <div className='headerBar'>
                <span className='blackburn'>Blackburn Building II</span>
                <div className='gsemLogo'></div>
            </div>
            <div className='q1' style={upstairsTV ? this.imageMap.upper : this.imageMap.lower }>
                
            </div>
            <div className='q2'>
                <h6>THIS LEVEL</h6>
                {upstairsTV ? upperSuites() :lowerSuites()}
                <h6>{upstairsTV ? 'DOWNSTAIRS' : 'UPSTAIRS'}</h6>
                {upstairsTV ? lowerSuites() : upperSuites()}

            </div>
        </div>
        <div className='advertisementSide' style={isRotated} >
            <iframe
                id='advertisement_upper_screen'
                title='advertisement_upper_screen'
                // src={`https://www.youtube.com/embed/${videoData[0]}`}
                src={`https://simustream.com/watch/gsem_technologies/${videoData[0]}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            <div>Advertise here contact Suite 505</div>
        </div>
      </div>
    );
  }
}

export default UpperPage;
