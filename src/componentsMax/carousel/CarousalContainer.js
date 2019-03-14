import React from 'react';
import CarousalElement from './CarousalElement';
import Slider from "react-slick";
import './CarousalContainer.css';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    let cla='fas fa-angle-right';
    return (
        /* <div
             className={className}
             style={{ ...style, display: "block"}}
             onClick={onClick}
         />*/
        <i className={[cla,className]} onClick={onClick} ></i>
    );
}





class CarousalContainer extends React.Component{
    render(){
        let settings={
            slidesToShow:4,
            nextArrow:<SampleNextArrow/>
        }
        return (
            <div className='back'>
                <div className='container'>
                    <Slider {...settings}>
                        {this.props.carEls.map(
                            (carEl,i)=>{
                                return <CarousalElement key={carEl} carEl={carEl} carElBtn={this.props.carElsBtn} ref={this.props.myRefs[i]}/>
                            }
                        )}
                    </Slider>

                </div>
            </div>
            /*<div>
                {this.props.carEls.map(
                   (carEl)=>{
                        return <CarousalElement carEl={carEl}/>
                    }
                )}
            </div>*/

        )
    }
}

export default CarousalContainer;