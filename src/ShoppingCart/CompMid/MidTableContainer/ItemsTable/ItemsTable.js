import React from 'react';
import {TableTitle} from "./TableTitle/TableTitle";
import {TableContents} from "./TableContents/TableContents";
import DataBase from "../../../../dataBase/DataBase";

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
         size: this.props.size,
         incrementable: this.props.incrementable
     }
 }
    logData(){
        console.log(this.state.data);
    }

    render() {

     if(this.state.size !== this.props.size){
         this.setState({size: this.props.size})
     }

     this.logData();

     return(
         <div className={"store-table-" +this.props.size} id="scrollable">
             <div className="table-title-container">
         <TableTitle extended = {this.state.extended} size={this.state.size}/>
             </div>
         <div >
                <table className={this.state.size}>
                    <TableContents data={this.state.data} size={this.state.size} extended={this.state.extended} incrementable={this.state.incrementable}/>
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