import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class Location extends React.Component{

    render() {

        return(
            <div>
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
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyARE7S5Bb1qjhvPx0teJXamIESR2sy39s0')
})(Location)