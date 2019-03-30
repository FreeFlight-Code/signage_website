import React, { Component } from 'react';
import YTubeFrame from '../Components/YTubeFrame';
import upperLevelImage from '../images/BR_vert_upper.jpg'

class Horizontal extends Component {

    render() {
        const upperSuites = ()=>{
            if (this.props.data.dataTop.length){
                return (this.props.data.dataTop.map((el, i)=>{
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
            if (this.props.data.dataBottom.length){
                return (this.props.data.dataBottom.map((el, i)=>{
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
        <img alt='simustream logo' className='simustreamLogo' src='https://gsemtechnologies.com/wp-content/uploads/2018/01/SimustreamWebHorizontal-website-550x400.png' onClick={this.props.handleClick}></img>

        <div className='mapSide'>
            <img src={upperLevelImage} className='map upper' alt='upper level map'></img>
            <div className='suiteContainer'>
                <h6>THIS LEVEL</h6>
                {upperSuites()}
                <h6>{'DOWNSTAIRS'}</h6>
                {lowerSuites()}
            </div>
        </div>

        <div className='advertisementSide'>
            < YTubeFrame />
            <div className='adSpace'>
                <div>To advertise here contact Suite 505</div>
                <img className='adSpaceLogo' src='https://gsemtechnologies.com/wp-content/uploads/2018/01/GSEMLOGO-1.png' alt='Ad logo'></img>
                <div>Your logo here</div>
            </div>
        </div>

      </div>
    );
  }
}

export default Horizontal;
