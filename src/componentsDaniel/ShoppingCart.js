import React from 'react';
import './LeftC.css';
import {CompMidLeft} from "./CompMidLeft";
import MidTableContainer from "./mid-table-container";
import {CompMid} from "./comp_mid";

// <CompMidLeft/>
//                 <MidTableContainer modeEconom={false}/>


 class ShoppingCart extends React.Component{

//TODO put prop in left

     render() {


        return (

            <div id="mid-container">
               <CompMid/>
            </div>


        );
    }


}


export default ShoppingCart;