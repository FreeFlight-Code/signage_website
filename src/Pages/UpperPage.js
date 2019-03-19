import React, { Component } from 'react';

import suiteData from "./data.json";
import videoData from "./videoData.json";
import './UpperPage.css'
const upper = suiteData.upper;
const lower = suiteData.lower;


class UpperPage extends Component {
    render() {
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
        <div className='mapSide'>
            <div className='headerBar'>
                <span className='blackburn'>Blackburn Building II</span>
                <img source='https://gsemtechnologies.com/wp-content/uploads/2018/01/GSEMLOGO-1.png' className='gsemLogo'></img>
            </div>
            <div className='q1'>
                
            </div>
            <div className='q2'>
                {upperSuites()}
            </div>
            <div className='q3'>

            </div>
            <div className='q4'>
                {lowerSuites()}

            </div>
            <div className='q5'>
                info_
            </div>
        </div>
        <div className='advertisementSide'>
            <iframe
                id='advertisement_upper_screen'
                title='advertisement_upper_screen'
                src={`https://www.youtube.com/embed/${videoData[0]}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
      </div>
    );
  }
}

export default UpperPage;
