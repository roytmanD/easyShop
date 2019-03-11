import React from 'react';
import './ShoppingList.css';
import ItemList from './itemList';
import DataBase from '../../dataBase/DataBase';



let currentLogin=sessionStorage.getItem("lastAuth");

let count = 0;

let shopList=[];

let privatize=false;

class ShoppingList extends React.Component {




    constructor(props) {

        super(props);
        this.myRefs = [React.createRef(), React.createRef(), React.createRef()];
        this.allRefs = [].concat(this.myRefs);
        this.nameRef=React.createRef();
        this.state = {
            inputCols: [<ItemList myRefs={this.myRefs} key={count++}/>],
            privatizeTextToggler:''
        };

        this.handlePrivate=this.handlePrivate.bind(this);
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
        let listName=this.nameRef.current.value;
        let allRefs = this.allRefs;
        console.log(allRefs.map((ref) => {
            return ref.current.value
        }));
        for (let i = 0; i < allRefs.length; i++) {
            if(allRefs[i].current.value!==""){
                shopList.push(allRefs[i].current.value)
            }}
        if(shopList!==[]&&listName!==(null||("".trim()))) {
            DataBase.addList(shopList,listName,currentLogin,privatize);
            alert(`${currentLogin}, your ${listName.split('list')} list is added successfully!`);
            window.location.reload();
        }
        else if(listName===null||("".trim())){
            alert('Please come up with some name for the list');
        }
        else{
            alert('Add some items to the list and name it');
        }
        shopList=[];


    }

    handlePrivate() {
        privatize=!privatize;

        if(privatize)this.setState({privatizeTextToggler:'private'});
        else this.setState({privatizeTextToggler:''});
        console.log(this.state)

    }


    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='createHeader col-3'>
                        <p>Create your shopping list</p>
                        <input ref={this.nameRef} placeholder="Imagine some funny name for the list"/>
                        <button className='radio-btn' onClick={this.handlePrivate}></button>
                        <p className={this.state.privatizeTextToggler}>Make your list private</p>
                    </div>
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