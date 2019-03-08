import React from 'react';
import ReactDOM from 'react-dom';
import './LeftC.css';
import {CompMidLeft} from "./CompMidLeft";
import MidTableContainer from "./mid-table-container";

//TODO WTF compMid not used? shit

export class CompMid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modeToggled: "optimal"
        };
         this.toggleStateHandler = this.toggleStateHandler.bind(this);
    };


    // toggleStateHandler(toggleStateFrom_CompMidLeft){
    //     console.log('previous parent state ----' + JSON.stringify(this.state.economyMode));
    //     this.setState({
    //         economMode: toggleStateFrom_CompMidLeft
    //     },()=>console.log('new compMid state --' + JSON.stringify(this.state.economyMode)));
    // }

    toggleStateHandler = (toggleStateFrom_CompMidLeft) =>{
        this.setState({
            modeToggled: toggleStateFrom_CompMidLeft
        });

        console.log(this.state.modeToggled +"1) got new state at comp_mid from compMidLeft!")
    };
    render() {

        return (

            <div id="mid-container">
                <CompMidLeft toggle={this.toggleStateHandler} modeToggled={this.state.modeToggled}/>
                <MidTableContainer modeToggled={this.state.modeToggled}/>
            </div>


        );
    };


}

//TODO
