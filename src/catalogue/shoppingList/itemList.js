import React from 'react';
import './ShoppingList.css';

class ItemList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='col-4'>
                {this.props.myRefs.map((ref)=>{return <input  type='text' placeholder='add item' ref={ref} className='inputItem'/>})}

            </div>
        )
    }
}

export default ItemList;

