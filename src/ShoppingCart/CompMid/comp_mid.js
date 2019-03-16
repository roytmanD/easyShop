import React from 'react';
import '../../LeftC.css';
import MidTableContainer from "./MidTableContainer/mid-table-container";
import {CompMidLeft} from "./CompMidLeft/CompMidLeft";


//TODO WTF compMid not used? shit

export class CompMid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isAuth: this.props.isAuth,
            modeToggled: "optimal"
        };
         this.toggleStateHandler = this.toggleStateHandler.bind(this);
    };




    toggleStateHandler = (toggleStateFrom_CompMidLeft) =>{
        this.setState({
            modeToggled: toggleStateFrom_CompMidLeft
        });


    };

    render() {

        console.log(this.state.modeToggled)//

        return (

            <div className="mid-container">
                <CompMidLeft toggle={this.toggleStateHandler} modeToggled={this.state.modeToggled}/>
                <MidTableContainer isAuth={this.state.isAuth} modeToggled={this.state.modeToggled}/>
            </div>


        );
    };


}

//TODO
