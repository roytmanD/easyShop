import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NavigBar from "./catalogue/navBar/NavBar";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Catalogue from "./catalogue/Catalogue";
import Registration from "./Registration/Registration"
import {Footer} from "./footer/Footer";
import {API_KEY, BASE_URL, sessionStorage} from "./dataBase/DataBase";
import DataBase from "./dataBase/DataBase";
import {CarousalCard} from './catalogue/Catalogue';
import Profile from './profile/Profile';


let isAuth = sessionStorage.getItem(sessionStorage.getItem('lastAuth'));
let logout;
let signup;



export const GET_shopLists_Url = '/databases/easy_shop/collections/shopLists';

const EASY_SHOP = '/databases/easy_shop/collections';

const AUTH = "AUTH";

let searchRes=[];

class App extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);

        this.state = {
            isAuth: isAuth,
            btn: <a id="signup_btn" href='/registration'>Signup</a>,
            loginValue: 'empty',
            passwordValue: 'empty',
            searchRes: searchRes
        };



        this.searchRef = React.createRef();

        this.logRef = React.createRef();
        this.pwdRef = React.createRef();


        this.signIn = this.signIn.bind(this);
        this.logIn = this.logIn.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    }

    handleSearch() {


        let searchInput = this.searchRef.current.value;
        if(this.state.isAuth==='AUTH') {
            let currentUser = sessionStorage.getItem('lastAuth');
            DataBase.searchUsersList(currentUser, searchInput)
                .then((d) => {
                    searchRes = [];

                    for (let i = 0; i < d.length; i++) {


                        console.log(d);
                        console.log(d[i]);
                        searchRes.push(new CarousalCard(d[i].name, d[i].list));
                    }
                        console.log(searchRes);
                        this.setState({
                            searchRes: searchRes
                        })
                     });
        }
        else{
            DataBase.getShopListByName(searchInput)
                .then((d) => {
                    searchRes = [];

                    for (let i = 0; i < d.length; i++) {


                        console.log(d);
                        console.log(d[i]);
                        searchRes.push(new CarousalCard(d[i].name, d[i].list));
                    }
                    console.log(searchRes);
                    this.setState({
                        searchRes: searchRes
                    })
                })
        }
        // .then((data)=>{return data.map((d)=>{console.log(d.list);return d.list})});


    }

    componentWillMount() {
        logout = <Profile logoutBtn={(<button onClick={this.handleLogout}>Logout</button>)}/>
            //<button onClick={this.handleLogout}>Logout</button>;
        signup = <a id="signup_btn" href='/registration'>Signup</a>;
        console.log(this.state);

        if (this.state.isAuth === null) {
            this.setState({
                isAuth: 'non-auth',
                btn: signup
            })
        }
        else if (this.state.isAuth === 'AUTH') {
            this.setState({
                isAuth: 'AUTH',
                btn: logout
            })
        }
        else {
            console.log('fuuuuuuk');
        }
    }


    handleLogout() {
        sessionStorage.clear();
        console.log(sessionStorage);
        this.setState({
            isAuth: 'non-auth',
            btn: signup
        });
        console.log(this.state);
        window.location.reload();
    }


    signIn() {
        if (this.logRef.current !== null && this.pwdRef.current !== null) {
            this.setState({
                isAuth: sessionStorage.getItem(sessionStorage.getItem("lastAuth")),
                loginValue: this.logRef.current.value,
                passwordValue: this.pwdRef.current.value
            });


            DataBase.addToken(this.logRef.current.value, this.pwdRef.current.value);
            alert(`${this.logRef.current.value}, you are successfully registered!`);
        }
    }

    logIn(e, handler) {
        if (this.logRef.current !== null && this.pwdRef.current !== null) {
            this.setState({
                loginValue: this.logRef.current.value,
                passwordValue: this.pwdRef.current.value,
                isAuth: sessionStorage.getItem(sessionStorage.getItem("lastAuth")),
            });

            let login = this.logRef.current.value;
            let password = this.pwdRef.current.value;
            DataBase.auth(login, password).then((data) => {
                console.log(data);
                alert(`${login} is gloriously authentificated!`)
            }, () => alert(
                "Invalid login or password! try again"
            ));
            setTimeout(window.location.reload(), 1000);
        }
        else {
            alert('Fill in login and password!')
        }

        ///Todo fetching directly from the method

//             let q = {
//                 "login": login,
//                 "password": password
//             };
//             let query = JSON.stringify(q);
//             let url = BASE_URL + EASY_SHOP + '/tokens' + "?q=" + query + '&apiKey=' + API_KEY;
//             fetch(url).then(
//                 function (res) {
//                     console.log(res);
//                     if (res.length === 0) {
//                         alert('wrong!!')
//                     }
//                     else {
// let currentLogin;
//                         currentLogin = res[0].login;
//                         console.log(res);
//                         sessionStorage.setItem(currentLogin, AUTH);
//                         sessionStorage.setItem("lastAuth", currentLogin);//TODO костылек??????? несомненно
//                         console.log(sessionStorage.getItem(currentLogin))
//                     }
//
//                 }
//             ).then((data)=>console.log(data))
    }


    render() {
        console.log(this.state.searchRes);
        if
        (this.state.isAuth !== null &&
            this.state.isAuth !== sessionStorage.getItem(sessionStorage.getItem('lastAuth')) &&
            sessionStorage.getItem(sessionStorage.getItem('lastAuth')) !== null) {
            window.location.reload();
        }

        return (
            <div id="the-biggest-ass-div">
                <NavigBar isAuth={this.state.isAuth}
                          btn={this.state.btn}
                          searchRef={this.searchRef}
                          searchRes={this.state.searchRes}
                          searchBy={this.handleSearch}/>
                <BrowserRouter>
                    <div>
                        <Switch>

                            <Route path="/cart" component={ShoppingCart}/>
                            <Route path="/catalogue" component={Catalogue}/>
                            <Route path="/registration">
                                <Registration
                                    isAuth={this.state.isAuth}
                                    pwdRef={this.pwdRef}
                                    logRef={this.logRef}
                                    handleLogIn={this.logIn}
                                    handleSignIn={this.signIn}/>
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
                <Footer/>
            </div>
        );
    }
}


export default App;