import React, { Component } from 'react';
import YTubeFrame from './YTubeFrame';
import './LowerPage.css'
import lowerLevelImage from '../images/BR_vert_upper.jpg'

class LowerPage extends Component {

    render() {
        const { suites } = this.props; 
        const upperSuites = ()=>{
            if (suites.upper.length){
                return (suites.upper.map((el, i)=>{
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
            if (suites.lower.length){
                return (suites.lower.map((el, i)=>{
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
      <div className="LowerPageContainer">
        <div className='gsemLogo' onClick={this.props.handleClick}></div>
        <div className='advertisementSide_lower'>
            < YTubeFrame />
            <div>To advertise here contact Suite 505</div>
        </div>
        <div className='blackridge_lower'>Blackridge Building II</div>
        <div className='mapSideVertical'>
            <img src={lowerLevelImage} alt='lower level map'></img>
            <div className='suitesVertical'>
                <h6>THIS LEVEL</h6>
                {lowerSuites()}
                <h6>UPSTAIRS</h6>
                {upperSuites()}

            </div>
    </div>

      </div>
    );
  }
}

export default LowerPage;
