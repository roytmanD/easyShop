import React from 'react';
import ReactDOM from 'react-dom';
import './LeftC.css';

let total_sum = 420;
let saved_sum = 5;

//let flag = false;
export class CompMidLeft extends React.Component{

    constructor(props){
        super(props);
         this.state = {
             economyMode : false
         };
        this.toggleMode = this.toggleMode.bind(this);
    };

    toggleMode = () => {
      //  this.props.economyMode = true ? false : true; //TODO object is not extensible
    //console.log(this.props.economyMode);
       let  flag = this.state.economyMode;
       this.setState({economyMode:  !flag } );
      console.log(this.state.economyMode);

        this.props.onToggle1(flag);

    };


//onClick={()=>this.props.action(flag)} //TODO wtf....


    render(){

        return (
                <div id="left-container">
                    <p><strong>START</strong> SAVING MONEY NOW</p>
                    <p>Optional</p>
                    <div id="toggle-economy">
                        <label className="switch">
                            <input onChange={this.toggleMode} id="mode_toggle" type="checkbox"/>
                            <span className="slider round"/>
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