import React from 'react';
import './LeftC.css';

let total_sum = 420;
let saved_sum = 5;


export class CompMidLeft extends React.Component{

    constructor(props){
        super(props);
         this.state = {
             modeToggled : this.props.modeToggled
         };
        //this.toggleMode = this.toggleMode.bind(this);
    };

    toggleMode = () => {
      //  this.props.economyMode = true ? false : true; //TODO object is not extensible
    //console.log(this.props.economyMode);
        console.log(this.state.modeToggled + " fag1");
       let  flag = this.state.modeToggled;

       if( flag === "optimal"){
           flag = "econom";
       }else{
           flag = "optimal";
       }

       console.log(flag + "flag2");
       this.setState({modeToggled:  flag } );
      console.log(this.state.modeToggled);

        this.props.toggle(flag);

    };


//onClick={()=>this.props.action(flag)} //TODO wtf....


    render(){

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

                        <p>YOUR ECONOMY:</p>
                        <p>${saved_sum}</p>
                    </div>
                </div>

        );
    }
}


