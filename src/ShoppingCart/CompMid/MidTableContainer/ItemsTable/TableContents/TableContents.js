import React from 'react';

export class TableContents extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            list: this.props.list,
            data: this.props.data, //this data goes from place marked as TODO 4200
            incrementable: this.props.incrementable,
            extended: this.props.extended,
            size: this.props.size,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }

    increment(itemName){
     let curQ = parseInt(sessionStorage.getItem(itemName),10);
    sessionStorage.setItem(itemName, curQ+1);
 this.props.onQuantityChange();
    }

    decrement(itemName){
        let curQ = parseInt(sessionStorage.getItem(itemName),10);
        sessionStorage.setItem(itemName, curQ-1);
        this.props.onQuantityChange();
    }


    render() {
        if(this.state.data !== this.props.data){
            this.setState({list: this.props.list, data:this.props.data})
        }

        if(!this.state.extended){
            return(
                <tbody>
                { this.props.list.map((element, index) =>
                    <tr key={index}>
                        {this.state.extended ?   <td key={index}>{element}</td> : <td key={index}>{element}</td>}
                        { <td>
                            <button onClick={ () => this.decrement(element)}>-</button>
                            {sessionStorage.getItem(element)}
                            <button onClick={ () => this.increment(element)}>+</button>
                        </td> }
                    </tr>
                )}
                </tbody>
            );
        }else{
            return (
                <tbody>
                { this.state.data.map((element, index) =>
                    <tr key={index}>
                        {this.state.extended ?   <td key={index}>{element.itemName}</td> : <td key={index}>{element.itemName}</td>}
                        { <td className={this.state.size}>{sessionStorage.getItem(element.itemName)}</td>}
                        {this.state.extended ? <td key={3+ index}>{element.price}</td> : ""}
                    </tr>
                )}
                </tbody>
            );
        }
    }

}

export class UserCartTableTd  extends React.Component{

    constructor(props){
        super(props);
        this.state = {quantity: 1
        }

        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
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

