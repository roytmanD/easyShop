import React from 'react';

// let data = [
//     ['item 1', 2, 56],
//     ['item 2', 3, 965],
//     ['item 3', 1, 345],
// ]


let data = ['item',
'jtem',
'ktem',
    'ktem',
    'ktem'];

export class TableContents extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: this.props.data, //this data goes from place marked as TODO 4200
            incrementable: this.props.incrementable,
            extended: this.props.extended,
            size: this.props.size
        }
    }

    render() {
        if(this.state.data !== this.props.data){
            this.setState({data:this.props.data})
        }

        //TODO gottcha catch shit about empty data if it comes

        console.log(this.state.data);
        return (
            <tbody>
            { this.state.data.map((element, index) =>
                <tr key={index}>
                    {   this.state.extended ?   <td key={index}>{element[0]}</td> : <td key={index}>{element}</td>}
                    {this.state.incrementable ? <UserCartTableTd/> : <td className={this.state.size}>1</td>}
                    {this.state.extended ? <td key={index}>{element[2]}</td> : ""}
                </tr>
            )}
            </tbody>
        );
    }

}

export class UserCartTableTd  extends React.Component{

    constructor(props){
        super(props);
        this.state = {quantity: 1
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        this.setState({quantity:++this.state.quantity});
    }
    decrement(){
        this.setState({quantity:--this.state.quantity});
    }

    render() {

        return (
            <td className="user-cart-table">
                <button onClick={this.decrement}>-</button>
                {this.state.quantity}
                <button onClick={this.increment}>+</button> </td>
        );
    }
}

export class PriceTd extends React.Component{

    render() {
        return (
            <td  className="price-td"></td>
        );
    }
}