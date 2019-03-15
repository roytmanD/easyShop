import React, {Component} from 'react';
import DataBase from '../dataBase/DataBase';

import Starter from "./starter/Starter";
import Ads from "../componentsMax/ads/Ads";
import ShoppingList from "./shoppingList/ShoppingList";
import CarousalContainer from "./carousel/CarousalContainer";
import {sessionStorage} from "../dataBase/DataBase";


export class CarousalCard {
    constructor(name, list, isPrivate, handler) {
        if (arguments.length === 4) {
            this.name = (name.includes('list')? name.toUpperCase():(name+' list').toUpperCase())|| "";
            this.list = list || [""];
            if (isPrivate) this.isPrivate = '\nPrivate';
            else this.isPrivate = '';
            this.removeBtn = <button onClick={handler}>remove</button>
            this.roughName=name;

        }
        else {
            this.name = (name.includes('list')? name.toUpperCase():(name+' list').toUpperCase()) || "";
            this.list = list || [""];
            this.isPrivate = "";
            this.removeBtn = "";
            this.roughName=name
        }
    }
}

let allCards;
let slidesQ;


class Catalogue extends Component {


    constructor(props) {
        super(props);
        this.handleDeleteList = this.handleDeleteList.bind(this);
        this.showPrivateLists = this.showPrivateLists.bind(this);
        this.state = {
            carCards: [],
            view: 'all lists',
            showPrivateBtn: <button onClick={this.showPrivateLists}>Show private</button>


        };
        this.myRefs = [React.createRef(), React.createRef(), React.createRef(), React.createRef(),
            React.createRef(), React.createRef(), React.createRef()];


    }

//Todo debug the delete function and fix the delete query
    handleDeleteList() {
        console.log('delll');
        DataBase.removeList(this.myRefs[2].current.props.carEl)
            .then(data => console.log(data));
    }

    showPrivateLists() {
        if (this.state.view === 'all lists') {
            allCards = this.state.carCards;
            slidesQ = this.state.carCards.length;

            let privateCards = [];
            for (let i = 0; i < allCards.length; i++) {
                if (allCards.length > 0 && allCards[i].isPrivate) {
                    privateCards.push(allCards[i])
                }
            }

            this.setState({
                carCards: privateCards,
                showPrivateBtn: <button onClick={this.showPrivateLists}>Show all</button>,
                view: 'private lists',
            })
            console.log(allCards);
            console.log(privateCards);
        }
        else {
            this.setState({
                carCards: allCards,
                showPrivateBtn: <button onClick={this.showPrivateLists}>Show private</button>,
                view: 'all lists',

            })

            console.log(allCards);
        }
    }


    componentDidMount() {
        let card;

        DataBase.getShopListByLogin(sessionStorage.getItem('lastAuth'))
            .then((data) => {
                data = data.reverse();
                this.setState({
                    carCards: data.map((d) => {
                        console.log(data);
                        if (d.list !== undefined) {
                            card = new CarousalCard(d.name, d.list, d.private, this.handleDeleteList);
                            return card;
                        }
                    })
                })
            })
    }


    render() {
        return (
            <div className="Catalogue">
                <Starter/>
                <Ads/>
                <ShoppingList/>
                <CarousalContainer
                    myRefs={this.myRefs}
                    carCards={this.state.carCards}
                    privateBtn={this.state.showPrivateBtn}
                />
            </div>
        );
    }
}


export default Catalogue;