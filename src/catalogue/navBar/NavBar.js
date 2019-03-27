import React from 'react';
import './NavBar.css';

import logo from './logo@2x.png';

import Search from './search/Search';
import CarousalElement from "../carousel/carEl/CarousalElement";
import SearchResult from "./searchResult/SearchResult";


class NavigBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuth: this.props.isAuth,
            LogInOutBtn: this.props.btn,
            searchRes:this.props.searchRes
        };

    }

    renderRes(searchRes){
        let res=[];
        for (let i = 0; i < searchRes.length; i++) {
            console.log(searchRes);
            res.push(<CarousalElement className='col-3' key={i} carCard={searchRes[i]}/>);
        }
        return <SearchResult res={res}></SearchResult>




    }



    render() {
        const headerList = ['catalogue', 'cart', 'location'];
        const headers = headerList.map((header) => {
            return <a href={'/' + header} key={header}>{header}</a>
        });


        return (

            <div className='navbar'>
                <img src={logo}/>
                {headers}
                <Search search={this.props.searchBy} searchRef={this.props.searchRef}/>
                {this.state.LogInOutBtn}
                {console.log(this.renderRes(this.props.searchRes))}
                {this.renderRes(this.props.searchRes)}

            </div>


        )

    }


}

export default NavigBar;