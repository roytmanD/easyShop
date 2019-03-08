import React from 'react';
import {ItemsTable} from "./ItemsTable";
import store_1 from "./Images/store_1@2x.png";
import store_2 from "./Images/store_2@2x.png";
import store_3 from "./Images/store_3@2x.png";



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


//TODO 4200
const usersList = [
    ['beer', 6],
    ['weed', 30],
    ['burritto', 1],
    ['bueno', 4],
    ['chips', 2],
    ['humus', 3]
]

 class MidTableContainer extends React.Component {
constructor(props){
    super(props);
    this.state = {
        modeToggled: this.props.modeToggled
    }


}
     //  data = currentUserItems;

     render() {
         console.log(this.props.modeToggled + "2) got a property from CompMid at mid-table container");
    console.log(this.state.modeToggled + " a v kontainere to!");
         if (this.props.modeToggled === 'econom') {
             return (
                 <div id='mid-table-container'>
                     <div id="cart-table-container">
                         <div id="cart-table-header">My items</div>
                         <ItemsTable data={usersList} extended={false} size="full"/>
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
                         <ItemsTable data={data} extended={true} size="small"/>
                         <ItemsTable data={data} extended={true} size="small"/>
                         <ItemsTable data={data} extended={true} size="small"/>
                     </div>

                     <button id="burdilio_btn">
                         SHARE <strong>YOUR LIST</strong>
                     </button>
                 </div>
             );
         } else if (this.props.modeToggled === 'optimal') {
             return (
              <div id='mid-table-container'>
                  <div id="cart-table-header">My items</div>
                  <ItemsTable data={usersList} extended={false} size="medium"/>
                  <div id='stores-table-container'>
                      <div id="store-logo-container">
                          <div id="chippest-store" className="store-logo-container">
                              The lowest price for this list is in:
                              <img src={store_1}/>
                          </div>
                      </div>
                      <ItemsTable data={data} extended={true} size="full"/>
              </div>
              </div>
             );

         }else {
             return(
                 <div>hahahah</div>
             );
         }

     }
 }

export default MidTableContainer;




