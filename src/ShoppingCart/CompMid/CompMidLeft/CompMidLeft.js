import React from 'react';
import '../../../LeftC.css';

let total_sum = 0;
let difference ;
let differenceType = 'ECONOMY';



export class CompMidLeft extends React.Component{

    constructor(props){
        super(props);
         this.state = {
             modeToggled : this.props.modeToggled
         };
        this.toggleMode = this.toggleMode.bind(this);
    };

    toggleMode = () => {

       let  flag = this.state.modeToggled;

       if( flag === "optimal"){ //todo mk ternary
           flag = "econom";
       }else{
           flag = "optimal";
       }


       this.setState({modeToggled:  flag  } );


        this.props.toggle(flag); //event handler func from parent compMid;


    };



    render(){


        if(sessionStorage.getItem("currentList")) {
            difference = parseInt(sessionStorage.getItem("optimalTotal") - sessionStorage.getItem("economTotal"), 10);
            if (this.state.modeToggled === "optimal") {
                total_sum = sessionStorage.getItem("optimalTotal");
                differenceType = "OVERPAY";

            } else {
                total_sum = sessionStorage.getItem("economTotal");
                differenceType = "ECONOMY";
            }


            return (
                <div id="left-container">
                    <p className="left-bar-header"><strong>START</strong> SAVING MONEY NOW</p>
                    <span className="toggle-container">
                        <p>Optimal
                            <div id="toggle-economy">
                                <label className="switch">
                                    <input onChange={this.toggleMode} id="mode_toggle" type="checkbox"></input>
                                    <span className="slider round"/>
                                </label>
                            </div>
                         Economy</p>
                    </span>

                    <div className="left-bar-total">
                        <p>TOTAL:</p>
                        <p>${total_sum}</p>

                        <p>YOUR {differenceType}:</p>
                        <p>${difference}</p>
                    </div>
                </div>

            );
        }else {
            return (
                <div id="left-container">
                    <p className="left-bar-header"><strong>START</strong> SAVING MONEY NOW</p>
                    <span className="toggle-container">
                        <p>Optimal
                            <div id="toggle-economy">
                                <label className="switch">
                                    <input onChange={this.toggleMode} id="mode_toggle" type="checkbox"></input>
                                    <span className="slider round"/>
                                </label>
                            </div>
                         Economy</p>
                    </span>
                </div>
            );
        }
    }
}


