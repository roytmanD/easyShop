import React from 'react';

const TABLE_COLUMNS = [
    {
        label: 'Items',
        sort: 'default',
    },{
        label: 'Quantity',
        sort: 'default',
    },{
        label: 'Price',
        sort: 'default',
    }
];


export class TableTitle extends React.Component{

    render() {

        return(
            <thead>
            <tr>
                {TABLE_COLUMNS.map((element, index) =>
                    <th key={index}>{element.label}</th>
                )}
            </tr>
            </thead>
        )
    }

}