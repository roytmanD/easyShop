import React from 'react';
import {TableTitle} from "./TableTitle";
import {TableContents} from "./TableContents";

const local_data = [
    ['tovar', 'kolvo', 'zena'],
    ['tovar', 'kolvo', 'zena'],
    ['tovar', 'kolvo', 'zena']
]

export class ItemsTable extends React.Component{

    render() {

     return(
         <div id="scrolltable">
                <table>
                    <TableTitle/>
                    <TableContents data={this.props.data}/>
                </table>
         </div>
        );
    }

}

ItemsTable.defaultProps = {
    data: local_data
}

