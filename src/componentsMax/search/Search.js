import React from 'react';

let searchOpenBtn=<button  id='searchBtn' data-toggle='collapse' data-target="#search"></button>;
let searchInput=<input className='col' placeholder='Type to search' id="search"/>;


class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchBtn:searchOpenBtn,
            searchInput:searchInput
        }
    }

    render(){
        return(
            <div id='search_container'>
                <button  type='button' data-toggle="collapse" data-target="#search">search</button>
                <div id='search' className="collapse"><input /></div>
            </div>
        )
    }
}

export default Search;