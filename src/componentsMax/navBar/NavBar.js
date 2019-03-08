import React from 'react';
import './NavBar.css';

import logo from './logo@2x.png';

import Search from '../search/Search';
import {sessionStorage} from "../../dataBase/DataBase";


/*let searchInp = <input className='collapse' placeholder='Type to search' id="search"/>;
let searchInpC = <input className='collapse in' placeholder='Type to search' id="search"/>;

let searchOpenBtn;
let searchOpenBtnC;
*/

class NavigBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isAuth: sessionStorage.getItem(sessionStorage.getItem("lastAuth"))
        }
        this.handleAuthChange = this.handleAuthChange.bind(this);
    }




    handleAuthChange(){ //this is a weak way to rerender nav bar! think a bit.. just later.......
        this.setState(sessionStorage.getItem(sessionStorage.getItem("lastAuth")));
    }
    /* constructor(props) {
         super(props);
         this.state = {
             searchInp: searchInp,
             searchOpenBtn: this.searchOpenBtn
         };
         this.handleToggleSearch = this.handleToggleSearch.bind(this);
         this.handleToggleSearchR = this.handleToggleSearchR.bind(this);
     };

     searchOpenBtn = <button  /*onClick={this.handleToggleSearch} id='searchBtn' data-toggle="collapse"
                                                                    data-target="#search"></button>;
     searchOpenBtnC = <button /*onClick={this.handleToggleSearchR} id='searchBtn' data-toggle="collapse in"
                                                                     data-target="#search"></button>;

     handleToggleSearch() {
         this.setState({searchInp: searchInpC});
         //this.setState({searchOpenBtn:this.searchOpenBtnC})
     };

     handleToggleSearchR() {
         this.setState({searchInp: searchInp});
         //this.setState({searchOpenBtn:this.searchOpenBtn})
     };

 */
    render() {
        const headerList = ['catalogue', 'cart', 'location'];
        const headers = headerList.map((header) => {
            return <a href={'/' + header} key={header}>{header}</a>
        });

        if(this.state.isAuth === 'AUTH'){
        return (

            <nav className='navbar'>
                <img src={logo}/>
                {headers}
                <Search/>
                <a id="signup_btn" href='/registration'>Signup</a>
            </nav>


        )}else {
            return(
            <nav className='navbar'>
                <img src={logo}/>
                <button onClick={this.handleAuthChange}>knopych</button>
                {headers}
                <Search/>
                <a id="signup_btn" href='/registration'>Welcome, {sessionStorage.getItem("lastAuth")}!</a>
            </nav>
            );
        }
    }


}

export default NavigBar;