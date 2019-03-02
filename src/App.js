import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import NavigBar from "./componentsMax/navBar/NavBar";
import ShoppingCart from "./componentsDaniel/ShoppingCart";
import Catalogue from "./componentsMax/catalogue/Catalogue";
import Registration from "./componentsDaniel/Registration/Registration"



class App extends Component {
  render() {
    return (
        <div id="the-biggest-ass-div">
        <NavigBar/>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component ={ShoppingCart}/>
            <Route path="/catalogue" component ={Catalogue}/>
            <Route path="/registration" component ={Registration}/>
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
        </div>
    );
  }
}

export default App;