import React, { Component } from 'react';
import VideoPlayer from '../Components/YTubeFrame';

class Universal extends Component {
    render(){
        const { mapUrl, orientation, tvName, layout, header, dataBottomDescriptor, adSpaceUrl, dataTop, dataBottom } = this.props.data;
        const checkOrientation = orientation.includes('portrait') ? 'Universal Container vertical' : 'Universal Container';
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
        const renderAdspace = function(){
            if (adSpaceUrl){
                return (
                    <div className='adSpace'>
                        <img className='adSpaceLogo' src={adSpaceUrl} alt='Ad logo'></img>
                    </div>

                )
            }else {
                return (
                    <div className='adSpace'>
                        <div>To advertise here contact Suite 505</div>
                        <img className='adSpaceLogo' src='https://gsemtechnologies.com/wp-content/uploads/2018/01/GSEMLOGO-1.png' alt='Ad logo'></img>
                        <div>Your logo here</div>
                    </div>
                )
            }
        }

        return(
            <div className={checkOrientation}>
                <div className='header'>{header}</div>
                <img id='simustreamLogo' src='https://gsemtechnologies.com/wp-content/uploads/2018/01/SimustreamWebHorizontal-website-550x400.png' alt='Simustream company Logo'></img>
                < VideoPlayer />
                <div className='data'>
                    <div className='label' >THIS LEVEL</div>
                    {renderData(dataTop, 'top')}
                    <div className='label bottom' >{dataBottomDescriptor.toUpperCase()}</div>
                    {renderData(dataBottom, 'bottom')}
                </div>
                <img className='map' src={mapUrl}></img>
                {renderAdspace()}
            </div>
        )
    }
}

export default Universal;