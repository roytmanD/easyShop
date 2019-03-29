import React from 'react';
import {TableTitle} from "./TableTitle/TableTitle";
import {TableContents} from "./TableContents/TableContents";
import DataBase from "../../../../dataBase/DataBase";



export class ItemsTable extends React.Component{

 constructor(props){
     super(props);
     this.state = {
         storeData: this.props.storeData,
         extended: this.props.extended,
         size: this.props.size,
         incrementable: this.props.incrementable
     }
 }


    render() {

     if(this.state.size !== this.props.size){
         this.setState({size: this.props.size})
     }

     if(this.props.storeData === undefined){
      return (   <div>
      <progress className="data-waiting-pb"></progress>
      </div>);
     }else {
         return (
             <div className={"store-table-" + this.props.size} id="scrollable">
                 <div className="table-title-container">
                     <TableTitle extended={this.state.extended} size={this.state.size}/>
                 </div>
                 <div>
                     <table className={this.state.size}>
                         <TableContents data={this.props.storeData} size={this.state.size}
                                        extended={this.state.extended} incrementable={this.state.incrementable}/>
                     </table>
                 </div>
             </div>
         );
     }
    }

}




//  <TableContents data={this.props.data}/>