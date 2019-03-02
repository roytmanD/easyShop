import React from 'react';


class Registration extends React.Component{


    render() {



        return(
            <div id="registration_container">
               <div id="fields-container">
                   <input id="login_input" placeholder="enter yo login"/>
                   <label htmlFor="login_input">Login</label>
                   <input id="password_input" placeholder="enter yo password"/>
                   <label htmlFor="password_input">Password</label>
               </div>
            </div>

        );
    }

}


export default Registration;