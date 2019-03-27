import React from 'react';
import './Ads.css'

import img1 from './images/uncB.jpeg';
import img2 from './images/sweets.jpeg';
import img3 from './images/apples.jpg';

class Ads extends React.Component{
    render(){
        const adsList=[img1,img2,img1];
        const ads=adsList.map((ad)=>{
            return <div><img className='col-3' key={ad} src={ad} alt='advertisement' ></img><a href='/'>buy now</a></div>
        })
        return(
            <div className='ads row'>

                {ads}

            </div>
        )

    }
}

export default Ads;