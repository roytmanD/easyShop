import React from 'react';
import ReactDOM from 'react-dom';
import './LeftC.css';
import {CompMidLeft} from "./CompMidLeft";
import {MidTableContainer} from "./mid-table-container";



export class CompMid extends React.Component{
    render() {

        return (

            <div id="mid-container">
                <CompMidLeft/>
                <MidTableContainer/>
            </div>


        );
    }


}

ReactDOM.render(CompMid, document.getElementById("root"));
