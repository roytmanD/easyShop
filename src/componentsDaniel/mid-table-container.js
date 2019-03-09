import React from 'react';
import {ItemsTable} from "./ItemsTable";
import store_1 from "./Images/store_1@2x.png";
import store_2 from "./Images/store_2@2x.png";
import store_3 from "./Images/store_3@2x.png";
import DataBase from "../dataBase/DataBase";



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
let usersList = [
    ['beer', 6],
    ['weed', 30],
    ['burritto', 1],
    ['bueno', 4],
    ['chips', 2],
    ['humus', 3]
]

let vegetarianList = [
    ['broccoli', '1 piece'],
    ['soy beans' , '1 pack'],
    ['tofu', '1 pack'],
    ['rice', '1 pack'],
    ['potatoes', '1 kg']
]

let shabbatList = [
    ['hala', '1 piece'],
    ['kedush vine', '1 bottle'],
    ['humus', '1 pack'],
    ['meat', '1 kg'],
    ['rice', '1 pack']
];

let lists = [vegetarianList, shabbatList];

//TODO mid table container will pass incrementable propperty
 class MidTableContainer extends React.Component {
constructor(props){
    super(props);
    this.state = {
        isAuth: this.props.isAuth,
        modeToggled: this.props.modeToggled
    }


}
     //  data = currentUserItems;

     render() {

    if(this.state.isAuth !== "AUTH"){
        usersList = vegetarianList;
        console.log(this.state.isAuth + " fddfdfd");
    }else {
        //usersList = DataBase.getLastUserList(); //TODO create this function
    }

         if (this.props.modeToggled === 'econom') {
             return (

                 <div id='mid-table-container'>
                     <div id="cart-table-container">
                         <div id="cart-table-header">My items</div>
                         <ItemsTable data={usersList} extended={false} size="full" incrementable={true}/>
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
                         <ItemsTable data={data} extended={true} size="small" incrementable={false}/>
                         <ItemsTable data={data} extended={true} size="small" incrementable={false}/>
                         <ItemsTable data={data} extended={true} size="small" incrementable={false}/>
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
                  <ItemsTable data={usersList} extended={false} size="medium" incrementable={true}/>
                  <div id='stores-table-container'>
                      <div id="store-logo-container">
                          <div id="chippest-store" className="store-logo-container">
                              The lowest price for this list is in:
                              <img src={store_1}/>
                          </div>
                      </div>
                      <ItemsTable data={data} extended={true} size="full" incrementable={false}/>
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




