import React from 'react';
import {TableTitle} from "./TableTitle";
import {TableContents} from "./TableContents";
import DataBase from "../dataBase/DataBase";

const local_data = [
    ['tovar', 'kolvo', 'zena'],
    ['tovar', 'kolvo', 'zena'],
    ['tovar', 'kolvo', 'zena']
]

export class ItemsTable extends React.Component{

 constructor(props){
     super(props);
     this.state = {
         data: this.props.data,
         extended: this.props.extended,
         size: this.props.size
     }
 }
    logData(){
        console.log(this.state.data);
    }

    render() {

     this.logData();

     return(
         <div>
             <div className="table-title-container">
         <TableTitle extended = {this.state.extended} size={this.state.size}/>
             </div>
         <div id="scrolltable">
                <table className={this.state.size}>
                    <TableContents data={this.state.data} size={this.state.size}/>
                </table>
         </div>
         </div>
        );
    }

}

ItemsTable.defaultProps = {
    data: local_data
}

//  <TableContents data={this.props.data}/>