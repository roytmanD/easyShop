import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import "./Contacts.css";
import {Location} from "../Location/Location";

export class Contacts extends React.Component{

    render() {

        return(
            <div className="contacts-container">
                <div className="contacts">
                    <h5>Support:</h5>
                    <p>Phone: +972 512 585 971</p>
                    <p>Email:support_easyshop@gmail.com</p>
                    <p>Skype: EasyShopSupp111</p>
                </div>
                <div className="contacts">
                    <h5>You know how to make Easy Shop even better? Tell us how!</h5>
                    <p>Email:ideas_easyshop@gmail.com</p>
                </div>
                <div className="contact">
                    <h5>Cooperation</h5>
                    <p>If you are a shop owner please contact our manager:</p>
                    <p>Phone: 0 513 351 842 822</p>
                    <p>Email: coop_easнshop@gmail.com</p>
                </div>
                <div className="contacts">
                    <h5>Address:</h5>
                    <p>Legal address: Plaut 10 Rehovot, Israel</p>
                    <p>Head office: Plaut 10, Rehovot, Israel</p>
                    {/*<Map google={this.props.google} zoom={14} initialCenter={{lat:31.912150,lng:34.806970}}>*/}
                        {/*<Marker position={{lat:31.912150, lng:34.806970}}/>*/}
                    {/*</Map>*/}

                </div>
            </div>
        );
    }
}
