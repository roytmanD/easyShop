import React from 'react';
import DataBase from "../../dataBase/DataBase";


class Registration extends React.Component{

    constructor(props){
        super(props);
        this.logRef = React.createRef();
        this.pwdRef = React.createRef();

       this.state = {
           condition: 'unauthorized',
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

   if( DataBase.auth(this.logRef.current.value ,  this.pwdRef.current.value)) {
       this.setState({condition: 'authorized'});

      // this.props.onHandleStage('auth'); TODO
   }else{
       alert("Invalid login or password! try again")
   }
    }

    signOut= () =>{
        this.setState({condition: 'unauthorized'});
    }

    render() {


if(this.state.condition === 'unauthorized') {
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
}else if(this.state.condition === 'authorized'){
    return(
        <div id="registration_container">
            <div id="fields-container">
               <p id="welcome-text">Welcome, {this.logRef.current.value}!</p>
                <a  id="go-to-catalogue" href={"/catalogue"}>Create shopping list</a>
                <a id="go-to-map" href={"/map"}>Find stores around</a>
                <button onClick={this.signOut}>sign out</button>
            </div>
        </div>
    );
}
    }

}


export default Registration;