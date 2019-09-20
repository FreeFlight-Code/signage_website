import React, { Component } from 'react';
import VideoPlayer from '../Components/VideoProgram';
import AdSpace from '../Components/AdSpace';

class Universal extends Component {
    render(){
        const {
          mapUrl,
          orientation,
          // tvName, layout,
          header,
          dataBottomDescriptor,
          adSpaceUrl,
          dataTop,
          dataBottom
        } = this.props.data;

        const checkOrientation = orientation.includes('portrait') ? 'Universal Container-vertical' : 'Universal Container';
        
        const renderData = function (data, placement){
            return data.map((el, i)=>{
                return (
                    <div className={`suite ${placement}`} key={`${placement}_${i}`}>
                        <span className='suiteName'>{el.name.toUpperCase()}</span>
                        <span className='suiteNumber'>{el.suite}</span>
                    </div>
                )
            })
        }
        const adObj = {

        }
        return(
            <div className={checkOrientation}>
              < AdSpace />
              <img id='simustreamLogo' src='https://gsemtechnologies.com/wp-content/uploads/2018/01/SimustreamWebHorizontal-website-550x400.png' alt='Simustream company Logo'></img>
              <div className='header'><h1>{header}</h1></div>
              < VideoPlayer />
              <img alt="map for this floor" className='map' src={mapUrl}></img>
              <div className='data'>
                <div className='label' >THIS LEVEL</div>
                {renderData(dataTop, 'top')}
                <div className='label bottom' >{dataBottomDescriptor.toUpperCase()}</div>
                {renderData(dataBottom, 'bottom')}
              </div>
            </div>
        )
    }
}

export default Universal;