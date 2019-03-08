import React from 'react';
import './ShoppingList.css';
import ItemList from './itemList';
import DataBase from '../../dataBase/DataBase';




let count = 0;

let shopList=[];


class ShoppingList extends React.Component {




    constructor(props) {

        super(props);
        this.myRefs = [React.createRef(), React.createRef(), React.createRef()];
        this.allRefs = [].concat(this.myRefs);
        this.state = {
            inputCols: [<ItemList myRefs={this.myRefs} key={count++}/>]
        };


        this.addItemCol = this.addItemCol.bind(this);
        this.handleCreateList = this.handleCreateList.bind(this);

    }

    addItemCol() {
        // adding new refs to refs array
        let newRefs = [React.createRef(), React.createRef(), React.createRef()];
        let currRefs = this.allRefs;
        console.log(currRefs);
        this.allRefs = currRefs.concat(newRefs);
        console.log(this.allRefs);

        let currInputCols = this.state.inputCols;
        currInputCols.push(<ItemList myRefs={newRefs} key={count++}/>);
        this.setState({inputCols: currInputCols});

    }

    handleCreateList() {
        // console.log(this.state.inputCols[0].refs.ref0);
        let allRefs = this.allRefs;
        console.log(allRefs.map((ref) => {
           return ref.current.value
        }));
        for (let i = 0; i < allRefs.length; i++) {
            if(allRefs[i].current.value!=""){
            shopList.push(allRefs[i].current.value)
        }}
        if(shopList!=[]) {
            DataBase.addList(shopList);
        }
        shopList=[];

    }


    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='createHeader col-3'>Create your shopping list</div>
                    <div className='col-9'>


                            <div className='row'>
                                <div className='inputContainer'>


                                    {this.state.inputCols.map((input) => {
                                        return input
                                    })}
                                </div>
                            </div>
                        <div className='row'>
                            <div className='col-6'><button  onClick={this.addItemCol}>+</button></div>
                            <div className='col-6'><button  onClick={this.handleCreateList}>Create</button></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default ShoppingList;