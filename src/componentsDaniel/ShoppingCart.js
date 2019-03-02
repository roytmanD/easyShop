import React from 'react';
import './LeftC.css';
import {CompMidLeft} from "./CompMidLeft";
import MidTableContainer from "./mid-table-container";




 class ShoppingCart extends React.Component{
    render() {

        return (

            <div id="mid-container">
                <CompMidLeft/>
                <MidTableContainer/>
            </div>


        );
    }


}

// ReactDOM.render(ShoppingCart, document.getElementById("root"));

export default ShoppingCart;