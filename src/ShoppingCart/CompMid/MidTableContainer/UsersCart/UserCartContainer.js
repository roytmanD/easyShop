import React from 'react';
import {TableTitle} from "../ItemsTable/TableTitle/TableTitle";
import {TableContents} from "../ItemsTable/TableContents/TableContents";
import DataBase from "../../../../dataBase/DataBase";



export class UserCartContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {data: this.props.data}
    }
    render() {

        if(this.state.data !== this.props.data){
            this.setState({data: this.props.data});
        }

        return (
            <div className="users-cart-container">
                <div className="cart-table-header">My items</div>
                <div className="user-cart-table">
                    <TableTitle extended={false} size="full" incrementable={true}/>
                    <TableContents onQuantityChange={this.props.onQuantityChange} list={this.state.data} extended={false} size="full" incrementable={true}/>
                </div>
            </div>
        );
    }

}