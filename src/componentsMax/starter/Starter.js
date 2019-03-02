import React from 'react';




const headersList=['Select the products that you need','Add the products to your cart','Get the products delivered'];

class Starter extends React.Component{
    render(){
        const headers=headersList.map((header)=>{
            return <h1 key={header}>{header}</h1>
        })
        return(
            <div>
                <div className='text'>
                    {headers}
                </div>
                <button>Start</button>
            </div>
        )}

}

export default Starter;