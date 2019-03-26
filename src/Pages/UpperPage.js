import React, { Component } from 'react';
import YTubeFrame from './YTubeFrame';
import upperLevelImage from '../images/BR_vert_upper.jpg'

class UpperPage extends Component {

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
      <div className="UpperPageContainer">

        <div className='blackridge'>Blackridge Building II</div>
        <div className='simustreamLogo' onClick={this.props.handleClick}></div>

        <div className='mapSide'>
            <img src={upperLevelImage} className='map upper' alt='upper level map'></img>
            <div className='q2'>
                <h6>THIS LEVEL</h6>
                {upperSuites()}
                <h6>{'DOWNSTAIRS'}</h6>
                {lowerSuites()}
            </div>
        </div>

        <div className='advertisementSide'>
            < YTubeFrame />
            <div>To advertise here contact Suite 505</div>
            <div className='adSpace'>
                <img className='adSpaceLogo' src='https://gsemtechnologies.com/wp-content/uploads/2018/01/GSEMLOGO-1.png' alt='Ad logo'></img>
                <div>Your logo here</div>
            </div>
        </div>

      </div>
    );
  }
}

export default UpperPage;
