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

    // constructor(props){
    //     super(props);
    //     this.state = {'list':[]}
    // }
 //   data = DataBase.getUsersShopLists();


    render() {

     return(
         <div id="scrolltable">
                <table>
                    <TableTitle/>
                    <TableContents data={this.props.data}/>
                    <button type="submit" onClick={DataBase.getUsersShopLists}>Refresh lists</button>
                </table>
         </div>
        );
    }

}

ItemsTable.defaultProps = {
    data: local_data
}

//  <TableContents data={this.props.data}/>