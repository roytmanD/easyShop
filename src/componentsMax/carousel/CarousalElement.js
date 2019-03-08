import React from 'react';
import './CarousalElement.css';
import {TableTitle} from "../../componentsDaniel/TableTitle";
import {TableContents} from "../../componentsDaniel/TableContents";

class CarousalElement extends React.Component{
    render(){
        const{carEl}=this.props;
        return(
            <div className='card'>
                <div className='red'></div>
            <div className='card-body'>

                <TableTitle/>
                <TableContents/>

            </div>
            </div>
        )
    }
}
export default CarousalElement;