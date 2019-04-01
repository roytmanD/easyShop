import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Location.css';
import LocationLeftBar from "./LocationLeftBar";
import store1 from '../Images/store_1@2x.png';
import store2 from '../Images/store_2@2x.png';
import store3 from '../Images/store_3@2x.png';


//let CURRENT_GEO = window.location; //TODO is it browser geo?
let REHOVOT_GEO = {lat: 31.894756,lng:34.809322};
let CURRENT_GEO = '31.894756, 34.809322';
console.log(window.location);
const API_KEY = 'AIzaSyDf5adHJDGMD40gNVM9KETpdweyScIn1HE';

const base_url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

const GOOGLE_API_KEY = 'AIzaSyDf5adHJDGMD40gNVM9KETpdweyScIn1HE';
export class Location extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            markers : [],
            filter: 10000,
            checkedStores: ['shufersal', 'rami+levy', 'tiv+taam']
        }

        this.onFilterChange = this.onFilterChange.bind(this);
    }



    setMarkers(stores, inRadius){

        let urls = [];
        stores.forEach(store =>{
            urls.push(base_url + '?location='+CURRENT_GEO +'&radius=' + inRadius + '&keyword=' + store + '&key=' + API_KEY);
        })


   let storeDataPromises = [];

    urls.forEach(url=>{
        let res = fetch(url);
        storeDataPromises.push(res);
    });


    let responses = Promise.all(storeDataPromises);

  //  let jsonResponse = responses.then(data => data.clone().json());

let mrkrs =[];
let iterCount = 0;
        responses.then(datas => {
            datas.forEach(d => {
                iterCount++;
            let jsonResponse = d.json();
            jsonResponse.then(data=>{
                for (let i = 0; i < data.results.length; i++) {
                    let storeObj = {name: data.results[i].name,
                                    id: data.results[i].id,
                                    coordinates:{
                                    lat: data.results[i].geometry.location.lat,
                                        lng: data.results[i].geometry.location.lng
                                    }}
                                    mrkrs.push(storeObj);

                }
                console.log(mrkrs);
                if(iterCount === datas.length){
                    this.setState({markers:mrkrs})
                }
            })

        })


});

    }


    onFilterChange(checkedStores, radius){
       // this.setState({filter:newFilter});
        this.setMarkers(checkedStores, radius);
    }


    render() {

        console.log(this.state.markers);
        return(
            <div className='location-container'>
                <LocationLeftBar handleFilterChange={this.onFilterChange}/>
                <div className='map-container'>
                    <Map initialCenter={REHOVOT_GEO} google={this.props.google} zoom={14} >
                        {this.state.markers.map(marker =>{
                            return <Marker key={marker.id} position={{lat:marker.coordinates.lat, lng: marker.coordinates.lng}}/>
                        })}
                        <InfoWindow onClose={this.onInfoWindowClose}>
                        </InfoWindow>
                    </Map>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (GOOGLE_API_KEY)
})(Location)