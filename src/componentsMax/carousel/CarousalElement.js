import React from 'react';
import './CarousalElement.css';

class CarousalElement extends React.Component{
    render(){
        const{carEl}=this.props;
        return(
            <div className='card'>
                <div className='red'></div>
            <div className='card-body'>


                <div>
                <h1>{carEl.type}</h1></div>
                <div>

                <h1>{carEl.product}</h1></div>
                <div>

                <h1>{carEl.price}</h1></div>
                <div>

                <h1>{carEl.organic}</h1></div>

            </div>
            </div>
        )
    }
}
export default CarousalElement;