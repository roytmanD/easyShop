import React from 'react';

// let data = [
//     ['item 1', 2, 56],
//     ['item 2', 3, 965],
//     ['item 3', 1, 345],
// ]

export class TableContents extends React.Component{

     // static propTypes = {
     //     data: []
     //
     // }

    render() {
        // if(this.props.data !== undefined){
        //     data = this.props.data;
        // }
        let data = this.props.data;
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