import React from 'react';
import './SearchResult.css'


class SearchResult extends React.Component{
    render(){
        return(

            <div id="sR" className='row'>
                {this.props.res}
            </div>
        )
    }
}

export default SearchResult;