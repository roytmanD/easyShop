import React from 'react';

let data = [
    ['item 1', 2, 56],
    ['item 2', 3, 965],
    ['item 3', 1, 345],
]

export class TableContents extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: this.props.data //this data goes from place marked as TODO 4200
        }
    }

    render() {
        if(this.state.data !== undefined){
            data = this.state.data;
        }


        return (
            <tbody>
            { data.map((element, index) =>
                <tr key={index}>
                    {element.map((item, i) =>
                        <td key={i}>{item}</td>
                    )}
                </tr>
            )}
            </tbody>
        );
    }

}