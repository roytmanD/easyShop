import React from 'react';
import './LeftC.css';
import {CompMidLeft} from "./CompMidLeft";
import MidTableContainer from "./mid-table-container";
import {CompMid} from "./comp_mid";
import {sessionStorage} from "../dataBase/DataBase";

// <CompMidLeft/>
//                 <MidTableContainer modeEconom={false}/>


 class ShoppingCart extends React.Component{

     constructor(props){
         super(props);

         this.state = {
             isAuth:  sessionStorage.getItem(sessionStorage.getItem("lastAuth"))
         }
     }
//TODO put prop in left

     render() {
        return (

            <div id="mid-container">
               <CompMid isAuth={this.state.isAuth}/>
            </div>


        );
    }


}


export default ShoppingCart;