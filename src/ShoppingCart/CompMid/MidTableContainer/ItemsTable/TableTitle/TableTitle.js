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

const TABLE_BASE = [
    {
        label: 'Items',
        sort: 'default'
    },{
        label: 'Quantity',
        sort: 'default'
    }
];

export class TableTitle extends React.Component {

    constructor(props){
        super(props);

        this.state = {size: this.props.size};

    }

    render() {
        if (this.props.extended) {
            return (
                <thead className="fixed-table-head" >
                <tr className={this.props.size}>
                    {TABLE_COLUMNS.map((element, index) =>
                        <th key={index}>{element.label}</th>
                    )}
                </tr>
                </thead>
            )
        } else {
            return (<thead className="fixed-table-head"  >
                <tr>
                    {TABLE_BASE.map((element, index) =>
                        <th className={this.props.size} key={index}>{element.label}</th>
                    )}
                </tr>
                </thead>

            );

        }
    }

}

