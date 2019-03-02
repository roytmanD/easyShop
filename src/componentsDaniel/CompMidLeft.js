import React from 'react';
import ReactDOM from 'react-dom';
import './LeftC.css';

let total_sum = 420;
let saved_sum = 5;
export class CompMidLeft extends React.Component{

    render(){

        return (
                <div id="left-container">
                    <p><strong>START</strong> SAVING MONEY NOW</p>
                    <p>Optional</p>
                    <div id="toggle-economy">
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <p>Economy</p>


                    <p>TOTAL:</p>
                    <p>${total_sum}</p>

                    <p>YOUR ECONOMY:</p>
                    <p>${saved_sum}</p>
                </div>

        );
    }
}


ReactDOM.render(CompMidLeft, document.getElementById("root"));