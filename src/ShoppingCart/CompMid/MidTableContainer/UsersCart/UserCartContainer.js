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

    // if(this.state.data.length === 0) {
    //     let currentList = DataBase.getCurrentList();
    //     currentList.then((data) => {
    //         this.setState({data: data});
    //     })
    // }
        if(this.state.data !== this.props.data){
            this.setState({data: this.props.data});
        }

        return (
            <div className="users-cart-container">
                <div className="cart-table-header">My items</div>
                <div className="user-cart-table">
                    <TableTitle data={this.state.data} extended={false} size="full" incrementable={true}/>
                    <TableContents data={this.state.data} extended={false} size="full" incrementable={true}/>
                </div>
            </div>
        );
    }

}