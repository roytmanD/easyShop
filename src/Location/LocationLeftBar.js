import React from 'react';



class LocationLeftBar extends React.Component{


    render() {

        return(
            <div id='location-left'>
                <div className="radius-block">
                    <p><strong>LOCATE </strong>FOODSTORES NEARBY</p>
                        <input placeholder='type search radius'/>
                </div>
                <button className='apply-radius-btn'>Apply</button>

            </div>
        );
    }
}

export default LocationLeftBar;