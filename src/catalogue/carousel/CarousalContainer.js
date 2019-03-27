import React from 'react';
import CarousalElement from './carEl/CarousalElement';
import Slider from "react-slick";
import './CarousalContainer.css';


function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    let cla = 'fas fa-angle-right';
    return (
        /* <div
             className={className}
             style={{ ...style, display: "block"}}
             onClick={onClick}
         />*/
        <i className={[cla, className]} onClick={onClick}></i>
    );
}


class CarousalContainer extends React.Component {
    render() {

            let settings = {
                slidesToShow: this.props.carCards.length<4?this.props.carCards.length:4,
                nextArrow: <SampleNextArrow/>
            };


        return (
            <div className='back'>
                {this.props.privateBtn}
                <div className='container'>
                    <Slider {...settings}>

                        {this.props.carCards.map(
                            (carCard, i) => {
                                /*console.log(carCard);*/
                                return <CarousalElement key={i}
                                                        ref={this.props.myRefs[i]}
                                                        carCard={carCard}
                                />
                            }
                        )}
                    </Slider>

                </div>
            </div>


        )
    }

}

export default CarousalContainer;