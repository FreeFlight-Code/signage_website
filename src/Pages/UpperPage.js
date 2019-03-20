import React, { Component } from 'react';

import suiteData from "./data.json";
import videoData from "./videoData.json";
import './UpperPage.css'
const upper = suiteData.upper;
const lower = suiteData.lower;


class UpperPage extends Component {
    constructor (props){
        super(props)
        this.state = {
            location: 'upper'
        }
    }

    imageMap = {
        upper: {backgroundImage: "url(https://2016.minneapolis.wordcamp.org/files/2016/05/venue-map.png)"},
        lower: {backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLsehmf34QmCGXmA6wzbByzduV1PIvCR5pB-MGkAY3weifwXU)"}
    }

    handleClick = ()=>{
        this.setState({
            location: this.state.location === 'upper' ? 'lower' : 'upper'
        })
    }
    


    render() {
        let { location } = this.state;
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
                            <span className='suiteName'>{el.name.toUpperCase()}</span>
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
                            <span className='suiteName'>{el.name.toUpperCase()}</span>
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
                <span className='blackburn'>Blackridge Building II</span>
                <div className='gsemLogo' onClick={this.handleClick}></div>
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
