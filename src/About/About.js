import React from 'react';
import "./About.css";

export class About extends React.Component{

    render() {

        return(
            <div className="about">
                <h1 className="about">Welcome to <strong>Easy Shop</strong> web service!</h1>
                <h2 className="about">What's <strong>Easy Shop?</strong></h2>
                <p className="about"><strong>Easy Shop</strong> is a web application created to help you save your money spent food at supermarkets
                    by calculating two saving options - the <strong>Optimal</strong> one and the <strong>Economy</strong> - based on users shopping list and store's items databases</p>

                <p className="about">The <strong>Optimal</strong> mode for Easy Shop provides single table which contains all the items from the user list priced by the cheapest store to buy this set.</p>
                <p className="about">The <strong>Economy</strong> mode for Easy Shop is an even cheaper alternative for people who are ready to visit few stores in order to buy the goods by the cheapest prices.</p>
                <h3 className="about">Sing up to start saving money! <a href="/registration">Go to authorization page</a></h3>
            </div>
        );
    }
}