import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Location.css';
import LocationLeftBar from "./LocationLeftBar";
import $ from 'jquery';

import { GoogleComponent } from 'react-google-location';



//request
//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY


//let CURRENT_GEO = window.location; //TODO is it browser geo?
let CURRENT_GEO = '31.894756, 34.809322';
console.log(window.location);
const API_KEY = 'AIzaSyDf5adHJDGMD40gNVM9KETpdweyScIn1HE';

const base_url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

const GOOGLE_API_KEY = 'AIzaSyDf5adHJDGMD40gNVM9KETpdweyScIn1HE';
export class Location extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            markers : []
        }
    }

    setMarkers(){
     //   let RADIUS = sessionStorage.getItem('currentRadius'); //hc yet
        let RADIUS = '5000';
        // let STORES = 'shufersal+or+ramiLevi+or+tivTaam';
        let STORES = 'rami';
        // let STORES = ['shufersal','rami levi', 'tiv taam'];
        // let CHECKED_STORES = '';
        // STORES.forEach(store =>{
        //     if(sessionStorage.getItem(store+'IsSelected')){
        //         if(CHECKED_STORES.length===0) {
        //             CHECKED_STORES.concat(store);
        //         }else{
        //             CHECKED_STORES.concat('+or+'+store);
        //         }
        //     }//соответственно по этому ключу надо хранить в сешон сторадже селектед сторы
        // }); // по идее на выходе будет массив отмеченных

        let url = base_url + '?location='+CURRENT_GEO +'&radius=' + RADIUS + '&keyword=' + STORES + '&key=' + API_KEY;

    console.log(url);
        let res = fetch(url);

         console.log(res);


       let jsonResponse = res.then(data =>data.clone().json());
        console.log(jsonResponse);


        jsonResponse.then(data => {
            console.log(data.results);

            console.log(Object.keys(data.results[0]));
            console.log(data.results[0].geometry.location.lat);
            console.log(data.results[0].geometry.location.lng);
            console.log(data.results[0].name);

            let mrkrs = [];
            for (let i = 0; i < data.results.length; i++) {
                let storeObj = {name: data.results[i].name,
                    coordinates :
                        {lat: data.results[i].geometry.location.lat,
                        lng:data.results[i].geometry.location.lng }}
                        mrkrs.push(storeObj);
            }

this.setState({markers:mrkrs});
        })
        
        


            // так ну выловить эту хуйню кинуть в стейт а там проблема и решена !!!
         //   let responseJson = data.json();
          //  this.setState({markers : responseJson });
            //надо еще посмотреть че там эта апи возвращает и как то парсить это. мне оттуда нужны координаты и сторнеймы. может айди>.
       //тут должен произойти сет стейт маркеров, которые при рендере из стейта должны размапиться в jsx  элементы <Marker/>
            //но сперва чекнем что все таки возвращает консоль лог а для этого надо сперва отрисовать этот фильтер
            // и функцию которая при его редактировании закидывает/удаляет айтемы в sessionStorage. то же самое для радиуса.
            // пока что наверное правильнее радиус захардкодить.
    }

    render() {

        if(this.state.markers.length === 0){
            this.setMarkers();
        }
//сразу внутри тела ретерна начать мапить маркеры в jsx


        // console.log(this.state.markers[5]);//TODO почему эта хрень консолит вполне нормальный джисон а выловить из него ниче не получается??
        // console.log(JSON.stringify(this.state.markers[0]));
        //
        // let to = JSON.stringify(this.state.markers[0]);


        console.log(this.state.markers);


        return(
            <div className='location-container'>
                <LocationLeftBar/>
                <div className='map-container'>
                    <Map google={this.props.google} zoom={14} center={CURRENT_GEO}>
                        {this.state.markers.map(marker =>{
                            return <Marker position={{lat:marker.coordinates.lat, lng: marker.coordinates.lng}}/>
                        })}
                        {/*{        this.state.markers.map(marker =>{*/}
                            {/*return (<Marker position={{lat: marker.geometry, lng: marker.lng}}/>)*/}
                        {/*})}*/}
                        {/*<Marker onClick={this.onMarkerClick}*/}
                                {/*name={'Current location'}*/}
                                {/*position={{lat: 37.778519, lng: -122.405640}}*/}
                        {/*/>*/}
                        {/*<Marker onClick={this.onMarkerClick}*/}
                                {/*name={'govno na palke'}*/}
                                {/*position={{lat: 45.778519, lng: -107.405640}}*/}
                        {/*/>*/}

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
    apiKey: (GOOGLE_API_KEY)
})(Location)