import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Location.css';
import LocationLeftBar from "./LocationLeftBar";


export class Location extends React.Component{

    render() {

        return(
            <div className='location-container'>
                <LocationLeftBar/>
                <div className='map-container'>
                    <Map google={this.props.google} zoom={14}>

                        <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}>
                            {/*<div>*/}
                            {/*<h1>{this.state.selectedPlace.name}</h1>*/}
                            {/*</div>*/}
                        </InfoWindow>
                    </Map>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDf5adHJDGMD40gNVM9KETpdweyScIn1HE')
})(Location)