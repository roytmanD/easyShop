import React from 'react';
import './ShoppingList.css';
import ItemList from './itemList';



let counter=0;


let inputRef1;
let inputRef2;
let inputRef3;


let count = 0;




class ShoppingList extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            inputCols:[<ItemList key={count++} inputRef1={(input)=>{inputRef1= input}} inputRef2={(input)=>{inputRef2= input}} inputRef3={(input)=>{inputRef3= input}}/>]

        };

        this.addItemCol=this.addItemCol.bind(this);
        this.handleCreateList=this.handleCreateList.bind(this);
    }

    addItemCol(){

        let currInputCols=this.state.inputCols;
       currInputCols.push(<ItemList inputRef1={(input)=>{inputRef1= input}} inputRef2={(input)=>{inputRef2= input}} inputRef3={(input)=>{inputRef3= input}} key={count++}/>);
        this.setState({inputCols:currInputCols});
    }

    handleCreateList(){
       // console.log(this.state.inputCols[0].refs.ref0);
        console.log(inputRef1.value);
        console.log(inputRef2.value);
        console.log(inputRef3.value);

    }




    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='createHeader col-3'>Create your shopping list</div>
                    <div className='col-9'>

                        <form id='form' className='form-group'>

                            <div className='row'>
                                <div className='inputContainer'>


                                    {this.state.inputCols.map((input) => {
                                        return input
                                    })}
                                </div>
                            </div>
                        </form>
                        <div>
                            <button className='buttons' onClick={this.addItemCol}>+</button>
                            <button onClick={this.handleCreateList}>Create</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default ShoppingList;