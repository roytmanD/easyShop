import React from 'react';
import {ItemsTable} from "./ItemsTable";
import store_1 from "./Images/store_1@2x.png";
import store_2 from "./Images/store_2@2x.png";
import store_3 from "./Images/store_3@2x.png";
import {currentUserItems} from "../dataBase/DataBase";
import {CompMidLeft} from "./CompMidLeft";


const data = [
    ['000', 111, 111],
    ['000', 311, 111],
    ['000', 111, 111],
    ['dsf', 123,222],
    ['dsf', 123,222],
    ['dsf', 123,222],
    ['dsf', 123,222],
    ['dsf', 123,222],
    ['dsf', 123,222],
    ['dsf', 123,222],
    ['dsf', 123,222],
    ['dsf', 123,222],
    ['dsf', 123,222],
]
 class MidTableContainer extends React.Component {
constructor(props){
    super(props);
    this.state = {
        "stage": "econom"
    }

}




     //  data = currentUserItems;

     render() {
    console.log('teeeeekkkkst'+CompMidLeft.flag);
         if (this.state.stage === 'econom') {
             return (
                 <div id='mid-table-container'>
                     <div id="cart-table-container">
                         <div id="cart-table-header">My items</div>
                         <ItemsTable data={data}/>
                         <ItemsTable data={data}/>
                         <ItemsTable data={data}/>
                     </div>
                     <div id='stores-table-container'>
                         <div id="store-logo-container">
                             <div className="store-logo-container">
                                 <img src={store_1}/>
                             </div>

                             <div className="store-logo-container" id="green">
                                 <img src={store_2}/>
                             </div>

                             <div className="store-logo-container">
                                 <img src={store_3}/>
                             </div>
                         </div>
                         <ItemsTable data={data}/>
                         <ItemsTable/>
                         <ItemsTable data={data}/>
                     </div>

                     <button id="burdilio_btn">
                         SHARE <strong>YOUR LIST</strong>
                     </button>
                 </div>
             );
         } else if (this.state.stage === 'optimal') {
             return (
                 <div>
                     <p>optimal</p>
                 </div>
             );

         }
     }
 }
export default MidTableContainer;