import React from 'react';
import {TableTitle} from "../ItemsTable/TableTitle/TableTitle";
import {TableContents} from "../ItemsTable/TableContents/TableContents";



export class UserCartContainer extends React.Component{

    render() {
        return (
            <div className="users-cart-container">
                <div className="cart-table-header">My items</div>
                <div className="user-cart-table">
                    <TableTitle data={this.props.data} extended={false} size="full" incrementable={true}/>
                    <TableContents data={this.props.data} extended={false} size="full" incrementable={true}/>
                </div>
            </div>
        );
    }

}