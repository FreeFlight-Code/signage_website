import React from 'react';

export default function AdSpace(adObj){
    // if (adObj){
    //     return (
    //         <div className='adSpace'>
    //             <img className='adSpaceLogo' src={adObj.url} alt={adObj.title}></img>
    //         </div>

    //     )
    // }else {
        return (
            <div className='adSpace'>
                <div className="adText" >To advertise here contact Suite 505</div>
                <img id="gsemlogo" className='adSpaceLogo' src='https://gsemtechnologies.com/wp-content/uploads/2018/01/GSEMLOGO-1.png' alt='Ad logo'></img>
                <div className="adText" >Your logo here</div>
            </div>
        )
    // }
}