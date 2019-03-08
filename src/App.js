import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavigBar from "./componentsMax/navBar/NavBar";
import ShoppingCart from "./componentsDaniel/ShoppingCart";
import Catalogue from "./componentsMax/catalogue/Catalogue";
import Registration from "./componentsDaniel/Registration/Registration"
import {Footer} from "./componentsDaniel/footer/Footer";



class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    stage: "non-auth",

  }

  }
  handleStage = (newStage) => {
    this.setState({stage: newStage});
    alert("new stage - " + this.state.stage);
  }

  render() {
    return (
        <div id="the-biggest-ass-div">
        <NavigBar/>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/cart" component ={ShoppingCart}/>
            <Route path="/catalogue" component ={Catalogue}/>
            <Route  path="/registration"  component ={Registration}/>
          </Switch>
        </div>
      </BrowserRouter>
        <Footer/>
        </div>
    );
  }
}
//onHandleChange={this.handleStage}
export default App;