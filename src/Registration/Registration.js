import React from 'react';
import {Link, Redirect, Route, Switch} from 'react-router-dom';

class Registration extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            isAuth: this.props.isAuth,
            loginValue: 'empty',
            passwordValue: 'empty'
        };

this.toggleAuth=this.toggleAuth.bind(this);

    }

toggleAuth(){
    if(this.props.handleLogIn()){
        this.setState({isAuth:'AUTH'});
}}




    render() {
        if (this.state.isAuth === 'non-auth' || this.state.isAuth === null) {
            return (
                <div id="registration_container">
                    <div id="fields-container">
                        <input ref={this.props.logRef} id="login_input" placeholder="enter yo login"/>
                        <label htmlFor="login_input">Login</label>
                        <input ref={this.props.pwdRef} id="password_input" placeholder="enter yo password"/>
                        <label htmlFor="password_input">Password</label>

                        <p className="reg">Don't have an EasyShop account yet?</p>
                        <button type="submit" onClick={this.props.handleSignIn}>Sign up</button>
                        <p className="reg">Already registered?</p>
                        <button type="submit" onClick={this.toggleAuth}  >Log in</button>
                    </div>
                </div>

            )
        }
        else if (this.state.isAuth === 'AUTH') {
            return (


<Redirect to='/catalogue' refresh={true}></Redirect>
            )
        }
        else {
            alert('epic fail')
        }
    }


}


export default Registration;