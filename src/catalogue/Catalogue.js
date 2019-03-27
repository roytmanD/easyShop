import React, {Component} from 'react';
import DataBase from '../dataBase/DataBase';

import Starter from "./starter/Starter";
import Ads from "../componentsMax/ads/Ads";
import ShoppingList from "./shoppingList/ShoppingList";
import CarousalContainer from "./carousel/CarousalContainer";
//import {sessionStorage} from "../dataBase/DataBase";


export class CarousalCard {
    constructor(name, list, isPrivate, handler,id) {
        if (arguments.length === 4) {
            this.name = (name.includes('list')? name.toUpperCase():(name+' list').toUpperCase())|| "";
            this.list = list || [""];
            if (isPrivate) this.isPrivate = '\nPrivate';
            else this.isPrivate = '';
            this.removeBtn = <button onClick={handler}>remove</button>;
            this.roughName=name;
        }
        else if(arguments.length===5){
            this.name = (name.includes('list')? name.toUpperCase():(name+' list').toUpperCase())|| "";
            this.list = list || [""];
            if (isPrivate) this.isPrivate = '\nPrivate';
            else this.isPrivate = '';
            this.removeBtn = <button onClick={handler}>remove</button>;
            this.roughName=name;
            this.id=id;
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
let allRefs;


class Catalogue extends Component {


    constructor(props) {
        super(props);
        this.handleDeleteList = this.handleDeleteList.bind(this);
        this.showPrivateListsToggler = this.showPrivateListsToggler.bind(this);
        this.state = {
            carCards: {
                content:[],
                refs:[]
            },
            view: 'all lists',
            showPrivateBtn: <button onClick={this.showPrivateListsToggler}>Show private</button>,

        };
        // this.myRefs = [React.createRef(), React.createRef(), React.createRef(), React.createRef(),
        //     React.createRef(), React.createRef(), React.createRef()];


    }

//Todo debug the delete function and fix the delete query
    handleDeleteList() {
        console.log('delll');
        DataBase.removeList(this.myRefs[2].current.props.carEl)
            .then(data => console.log(data));
    }

    showPrivateListsToggler() {
        if (this.state.view === 'all lists') {
            allCards = this.state.carCards.content;
            slidesQ = this.state.carCards.content.length;
            allRefs=this.state.carCards.refs;

            let privateCards = [];
            let privateRefs=[];
            for (let i = 0; i < allCards.length; i++) {
                if (allCards.length > 0 && allCards[i].isPrivate) {
                    privateCards.push(allCards[i]);
                    privateRefs.push(allRefs[i])
                }
            }


            this.setState({
                carCards:
                    {
                        content: privateCards,
                        refs: privateRefs
                    },
                showPrivateBtn: <button onClick={this.showPrivateListsToggler}>Show all</button>,
                view: 'private lists',
            })
            console.log(allCards);
            console.log(privateCards);
            console.log(privateRefs);
        }
        else {
            this.setState({
                carCards: {
                    content:allCards,
                    refs:allRefs
                },
                showPrivateBtn: <button onClick={this.showPrivateListsToggler}>Show private</button>,
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
                    carCards:
                        {
                            content: data.map((d) => {
                                console.log(data);
                                console.log(d._id);
                                if (d.list !== undefined) {
                                    card = new CarousalCard(d.name, d.list, d.private, this.handleDeleteList,d._id);
                                    return card;
                                }
                            }),
                            refs:data.map(()=>React.createRef())
                        }
                })

            })
    }


    render() {
        console.log(this.state.carCards);
        return (
            <div className="Catalogue">
                <Starter/>
                <Ads/>
                <ShoppingList/>
                <CarousalContainer
                    myRefs={this.state.carCards.refs}
                    carCards={this.state.carCards.content}
                    privateBtn={this.state.showPrivateBtn}
                />
            </div>
        );
    }
}


export default Catalogue;