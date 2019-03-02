import React, { Component } from 'react';

import Starter from "../starter/Starter";
import Ads from "../ads/Ads";
import ShoppingList from "../shoppingList/ShoppingList";
import CarousalContainer from "../carousel/CarousalContainer";

let carEl= {
    type: 'dairy',
    product: 'milk',
    price: 10,
    organic: 'organic'
};

let nextEl={
    type: 'fruit',
    product: 'apple',
    price: 6,
    organic: 'organic'
};



let carEls=[carEl,carEl,carEl,carEl,nextEl,nextEl];

class Catalogue extends Component {
    // handleSign(){
    // }


    constructor(props){
        super(props);
        this.state={
            carEls:carEls
        }
    }
    render() {
        return (
            <div className="Catalogue">
               <Starter/>
              <Ads/>
              <ShoppingList/>
              <CarousalContainer carEls={this.state.carEls}/>
            </div>
        );
    }
}



export default Catalogue;