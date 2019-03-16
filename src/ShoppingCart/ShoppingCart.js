import React from 'react';
import '../LeftC.css';

import {CompMid} from "./CompMid/comp_mid";


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