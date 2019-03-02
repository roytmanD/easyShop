import React from 'react';
import './ShoppingList.css';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemNumber: [0, 1, 2]

        };
    }

    render() {
        return (
            <div className='col-4'>
                <input  type='text' placeholder='add item' ref={this.props.inputRef1} className='inputItem'/>
                <input  type='text' placeholder='add item' ref={this.props.inputRef2} className='inputItem'/>
                <input  type='text' placeholder='add item' ref={this.props.inputRef3} className='inputItem'/>

            </div>
        )
    }
}

export default ItemList;

