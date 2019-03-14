import React from 'react';
import './Ads.css'

class Ads extends React.Component{
    render(){
        const adsList=['/img1','/img2','/img3'];
        const ads=adsList.map((ad)=>{
            return <img key={ad} src={ad}></img>
        })
        return(
            <div className='ads'>
                {ads}
            </div>
        )

    }
}

export default Ads;