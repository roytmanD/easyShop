import React from 'react';
import './CarousalElement.css';

class CarousalElement extends React.Component{
    render(){
        const{carEl}=this.props;
        const{carElBtn}=this.props;
        return(
            <div className='card'>
                <div className='red'>{carElBtn}</div>
                <div className='card-body'>


                    <div>
                        <h1>{carEl}</h1>
                    </div>


                </div>
            </div>
        )
    }
}
export default CarousalElement;