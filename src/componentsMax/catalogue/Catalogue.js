import React, {Component} from 'react';
import DataBase from '../../dataBase/DataBase';

import Starter from "../starter/Starter";
import Ads from "../ads/Ads";
import ShoppingList from "../shoppingList/ShoppingList";
import CarousalContainer from "../carousel/CarousalContainer";







class Catalogue extends Component {



    constructor(props) {
        super(props);
        this.handleDeleteList=this.handleDeleteList.bind(this);
        this.state = {
            carEls: [],
            carElsBtn: undefined
        };
        this.myRefs=[React.createRef(),React.createRef(),React.createRef(),React.createRef(),React.createRef(),React.createRef(),React.createRef()];

    }

    handleDeleteList(){
        console.log('delll');
        DataBase.removeList(this.myRefs[2].current.props.carEl)
            .then(data=>console.log(data));
    }





    componentDidMount() {
        DataBase.getShopList().then((data)=>{this.setState({
            carEls:data.map((d)=>d.list),
            carElsBtn:(<button onClick={this.handleDeleteList}>remove</button>)
        })})
    }

    componentDidUpdate(){
        console.log(this.state.carEls);
        console.log(this.state.carElsBtn);
    }






    render() {
        return (
            <div className="Catalogue">
                <Starter/>
                <Ads/>
                <ShoppingList/>
                <CarousalContainer carEls={this.state.carEls} carElsBtn={this.state.carElsBtn} myRefs={this.myRefs}/>
            </div>
        );
    }
}


export default Catalogue;