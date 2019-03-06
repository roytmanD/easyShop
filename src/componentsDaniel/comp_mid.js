import React from 'react';
import ReactDOM from 'react-dom';
import './LeftC.css';
import {CompMidLeft} from "./CompMidLeft";
import MidTableContainer from "./mid-table-container";



export class CompMid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            economMod: false
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
        console.log('previous parent state ----' + JSON.stringify(this.state.economMode));
        this.setState({
            economMode: toggleStateFrom_CompMidLeft
        });
    };
    render() {

        return (

            <div id="mid-container">
                <CompMidLeft onToggle1={this.toggleStateHandler} economMode={this.state.economMod}/>
                <MidTableContainer/>
            </div>


        );
    };


}

ReactDOM.render(CompMid, document.getElementById("root"));
