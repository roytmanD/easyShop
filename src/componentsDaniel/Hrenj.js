import React from 'react';
import ReactTable from "react-table";

const local_data = [
    ['000', 111, 111],
    ['000', 311, 111],
    ['000', 111, 111],
    ['dsf', 123,222],
    ['dsf', 123,222],
    ['dsf', 123,222],
    ['dsf', 123,222],
    ['dsf', 123,222],
    ['dsf', 123,222],
    ['dsf', 123,222],
    ['dsf', 123,222],
    ['dsf', 123,222],
    ['dsf', 123,222],
]

export class Hrenj extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: local_data
        };
    }
    render() {
        const { data } = this.state;
        return (


            <div>
                <ReactTable
                    data={data}
                    columns={[

                        {
                            Header: "Items",
                            accessor: "iiii"
                        },
                        {
                            Header: "Quantity",
                            id: "qqqqq",
                        },
                        {
                            Header: "Price",
                            accessor: "pppp"
                        }
                    ]
                    }
                    defaultPageSize={20}
                    style={{
                        height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
                    }}
                    className="-striped -highlight"
                />

            </div>
        );
    }
}


