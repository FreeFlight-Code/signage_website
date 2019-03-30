import React, { Component } from 'react';

class Universal extends Component {
    render(){
        const { orientation, tvName, layout, header, dataBottomDescriptor, adSpaceUrl, dataTop, dataBottom } = this.props.data;
        const checkOrientation = orientation.includes('portrait') ? 'UniversalContainer vertical' : 'UniversalContainer';
        
        return(
            <div className='Universal Container'>
                <div className='header'>{header}</div>

            </div>
        )
    }
}

export default Universal;