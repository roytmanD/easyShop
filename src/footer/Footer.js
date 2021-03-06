import React from 'react';
import logo from './logo@2x.png';
import logo_twi from "./logo-twi.png";
import logo_fb from "./logo-fb.png";
import logo_inst from "./logo-inst.png"
import "./footer.css";


export class Footer extends React.Component{

    render() {

        return(
            <span className="footer">
                <div className="footer-logo-container">
                    <img src={logo}/>
                    <p>EasyShop.Ltd</p>
                 </div>

                  <div className="about-contact-terms-link-container">
                    <a href="/about">About us</a>
                    <a href="/contact">Contact</a>
                    <a href="/terms">Terms & Conditions</a>
                </div>

                  <div className="social-networks-container">
                    <span className="link-image-container">
                        <img src={logo_fb}/>
                        <a href="https://www.facebook.com/">Facebook</a>
                    </span>
                    <span className="link-image-container">
                        <img src={logo_twi}/>
                        <a href="https://twitter.com">Twitter</a>
                    </span>
                    <span className="link-image-container">
                        <img src={logo_inst}/>
                        <a href="https://www.instagram.com">Instagram</a>
                    </span>
                 </div>


                    <div className="subscription-container">
                        <span>
                            <p>Subscribe to our newsletter</p>
                             <input placeholder="Email address"/>
                             <button>Ok</button>
                        </span>
                    </div>


                    <div className="contact-info-container">
                        <p>Plaut 10, Rehovot</p>
                        <p>+972052343891</p>
                        <p>info@easyshop.co.il</p>
                    </div>



            </span>
        )
    }
}



