import React from 'react';
import './CarousalElement.css';
import {CarousalCard} from '../../catalogue/Catalogue';
import {Redirect} from 'react-router-dom';
import ShoppingCart from "../../ShoppingCart/ShoppingCart";

let content;
let clicked=false;


class CarousalElement extends React.Component {

    // list(carcard) {
    //     console.log(carcard.list)
    //     if (carcard.list !== '') {
    //         carcard.list.map((li) => {
    //             return <li>{li}</li>
    //         })
    //     }
    //     else {
    //         return ""
    //     }
    // }

    constructor(props) {
        super(props);
        this.handleListChoice = this.handleListChoice.bind(this);
        this.state={
            clicked:clicked
        }
    }

    handleListChoice() {
        sessionStorage.setItem("currentList", this.props.carCard.roughName);
        console.log(sessionStorage);
        clicked=!clicked;
        if(clicked){this.setState({
            clicked:clicked
        })}
        clicked=!clicked;

    }

    renderContent(content, handler) {
        let goBtn;
if(this.props.carCard.removeBtn===""){
    goBtn=(<a onClick={handler} href='/cart'>Go to cart</a>)
}
else goBtn=( <button onClick={handler}> Go to cart</button>)

        return (<div className='card-body card-link'>
            {goBtn}
            <div>
                <ul>{content}</ul>
            </div>

        </div>)
    }

    render() {


        let carCard = this.props.carCard;
        if (carCard === undefined) carCard = new CarousalCard('', [''], '', '');
        console.log(carCard);
        if (carCard.list.length > 0) {
//console.log(carCard.isPrivate);
            content = carCard.list.map((li) => {
                return <li>{li}</li>
            });
        }
        else content = '';
        if(this.state.clicked){

            return <Redirect to={'/cart'}/>
        }

        return (
            <div className='card'>
                <div className='red'>
                    {carCard.removeBtn}
                    {carCard.name}
                    {carCard.isPrivate}
                </div>
                {this.renderContent(content, this.handleListChoice)}
            </div>
        )
    }
}

export default CarousalElement;