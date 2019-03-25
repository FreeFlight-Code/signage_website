import React, { Component } from 'react';
import YTubeFrame from './YTubeFrame';
import upperLevelImage from '../images/BR_vert_upper.jpg';
const adUrl = '';

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
        <img className='simustreamLogo' onClick={this.props.handleClick} src='https://gsemtechnologies.com/wp-content/uploads/2018/01/SimustreamWebHorizontal-website-550x400.png'></img>
        <div className='mapSide'>
            <img src={upperLevelImage} alt='upper level map'></img>
            <div className='suiteList'>
                <div className='LevelName'>UPSTAIRS</div>
                {upperSuites()}
                <div className='LevelName'>THIS LEVEL</div>
                {lowerSuites()}
            </div>
        </div>
        <div className='advertisementSide'>
            < YTubeFrame />
            <span>To advertise here contact Suite 505</span>
            <div className='adSpace'>
                <img src={adUrl || 'https://gust-production.s3.amazonaws.com/uploads/startup/panoramic_image/811961/social_20banner.jpg'} alt='advertising space business logo'></img>
            </div>
        </div>
      </div>
    );
  }
}

export default UpperPage;
