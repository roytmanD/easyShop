import React from 'react';
import './LeftC.css';
import {CompMidLeft} from "./CompMidLeft";
import MidTableContainer from "./mid-table-container";




 class ShoppingCart extends React.Component{

//TODO put prop in left

     render() {


        return (

            <div id="mid-container">
                <CompMidLeft/>
                <MidTableContainer modeEconom={false}/>
            </div>


        );
    }


}

// ReactDOM.render(ShoppingCart, document.getElementById("root"));

export default ShoppingCart;