import React from 'react';
import DataBase from "../../dataBase/DataBase";
import {Redirect} from 'react-router-dom';


class Registration extends React.Component{

    constructor(props){
        super(props);
        this.logRef = React.createRef();
        this.pwdRef = React.createRef();

        this.state = {
            isAuth: sessionStorage.getItem(sessionStorage.getItem("lastAuth")),
            loginValue: 'empty',
            passwordValue: 'empty'
        }
        this.signIn = this.signIn.bind(this);
        this.logIn = this.logIn.bind(this);
    }



    signIn() {

        this.setState({loginValue: this.logRef.current.value,
            passwordValue: this.pwdRef.current.value});


        //console.log(this.logRef.current.value);
        DataBase.addToken(this.logRef.current.value , this.pwdRef.current.value);
    }

    logIn(){
        this.setState({loginValue: this.logRef.current.value,
            passwordValue: this.pwdRef.current.value});

        let login = this.logRef.current.value;
        if( DataBase.auth(this.logRef.current.value ,  this.pwdRef.current.value)) {
            this.setState({condition: 'authorized'});//rename state property 4 auth

            const myStorage = window.localStorage;
            //myStorage.setItem(login, "AUTH");


            console.log(myStorage.getItem(login) + "uuuu");

            // this.props.onHandleStage('auth'); TODO
        }else{
            alert("Invalid login or password! try again")
        }
    }

    signOut= () =>{
        this.setState({isAuth: 'non-auth'});
        sessionStorage.setItem(sessionStorage.getItem("lastAuth"), "non-auth");
    }

    render() {
        console.log(this.state.isAuth + "am i auth or fuckin no?");

        if(this.state.isAuth === null){
            this.setState({isAuth: "non-auth"});
            // TODO is it okay to rerender just because of it?
            //TODO mb its better to just add OR NULL in the first if?
        }

        if(this.state.isAuth === 'non-auth') {
            return (
                <div id="registration_container">
                    <div id="fields-container">
                        <input ref={this.logRef} id="login_input" placeholder="enter yo login"/>
                        <label htmlFor="login_input">Login</label>
                        <input ref={this.pwdRef} id="password_input" placeholder="enter yo password"/>
                        <label htmlFor="password_input">Password</label>
                        <button type="submit" onClick={this.signIn}>Sign in</button>
                        <button type="submit" onClick={this.logIn}>Log in</button>
                    </div>
                </div>

            );
        }else if(this.state.isAuth==='AUTH'){
            return <Redirect to='/catalogue'/>
        }else {
            return <p id="u-totally-sucked">ITS U-TOTALLY-SUCKED COMPONENT</p>
        }
    }

}


export default Registration;