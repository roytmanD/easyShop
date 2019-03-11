import React from 'react';
import {ItemsTable} from "./ItemsTable/ItemsTable";
import store_1 from "../../../Images/store_1@2x.png";
import store_2 from "../../../Images/store_2@2x.png";
import store_3 from "../../../Images/store_3@2x.png";
import DataBase from "../../../dataBase/DataBase";
import {UserCartContainer} from "./UsersCart/UserCartContainer";
import {StoreTableContainer} from "./StoreTableContainer/StoreTableContainer";
import "./MidTableContainer.css";


let chippestStoreData = [];
let shufersalData = [];
let ramiLeviData = [];
let tivTaamData = [] ;





let vegetarianList = [
    ['broccoli', '1 piece'],
    ['soy beans' , '1 pack'],
    ['tofu', '1 pack'],
    ['rice', '1 pack'],
    ['potatoes', '1 kg']
]


let lists ;//LIST frim db // TODO

//TODO mid table container will pass incrementable propperty
 class MidTableContainer extends React.Component {
constructor(props){
    super(props);
    this.state = {
        isAuth: this.props.isAuth,
        modeToggled: this.props.modeToggled,
        data: [],
        shufersalData:[],
        ramiLeviData:[],
        tivTaamData: [],
        chippestStoreData:[]
    }


}
     // openPromiceFromEachStoreWrapper(shopData, shopName){
     //     let tempData = [];
     //
     //     shopData.then((data)=> {
     //         for (let i = 0; i < data.length; i++) {
     //         tempData.push([data[i].itemName, data[i].price, data[i].quantity]);
     //
     //         }
     //
     //         // console.log(this.state.storeData.shufersalData);
     //         // this.setState({shufersalData: });
     //
     //         switch (shopName) {
     //             case "shufersal":
     //                 this.setState({shufersalData:tempData});
     //                 break;
     //             case "ramiLevi":
     //                 this.setState({ramiLeviData:tempData});
     //                 break;
     //             case "tivTaam":
     //                 this.setState({tivTaamData:tempData});
     //                 break;
     //         }
     //     })
     // }
     getDataFromStores(list){


         shufersalData = DataBase.getUsersListItemsPricedBy('shufersal1', list); //assign shufersalDAta to promis with array
       // this.openPromiceFromEachStoreWrapper(shufersalData, "shufersal");

         ramiLeviData = DataBase.getUsersListItemsPricedBy('ramiLevi', list);

         tivTaamData = DataBase.getUsersListItemsPricedBy("tivTaam", list);


         //shuf
         shufersalData.then((data)=>{
             let tempData = [];


             for (let i = 0; i <data.length ; i++) {
                 tempData.push([data[i].itemName, data[i].price, data[i].quantity]);
             }
             this.setState({shufersalData:tempData});
         })

         //tiv
         tivTaamData.then((data)=>{
             let tempData = [];

             for (let i = 0; i <data.length ; i++) {
                 tempData.push([data[i].itemName, data[i].price, data[i].quantity]);
             }
             this.setState({tivTaamData:tempData});
         })
         //rami
         ramiLeviData.then((data)=>{
             let tempData = [];

             for (let i = 0; i <data.length ; i++) {
                 tempData.push([data[i].itemName, data[i].price, data[i].quantity]);
             }
             this.setState({ramiLeviData:tempData});
         })



     }

     render() {

    // if(this.state.isAuth !== "AUTH"){
    //     usersList = vegetarianList;
    // } //else usersList = DataBase.getLastUserList(); //TODO create this function

         if(this.state.data.length === 0) {
             let currentList = DataBase.getCurrentList();
             currentList.then((data) => {
                 this.setState({data: data});
             })
         }



if(this.state.shufersalData.length===0) {
    this.getDataFromStores(this.state.data); //TODO user list to parametrs
}

         if(this.state.tivTaamData.length===0) {
             this.getDataFromStores(this.state.data); //TODO user list to parametrs
         }

         if(this.state.ramiLeviData.length===0) {
             this.getDataFromStores(this.state.data); //TODO user list to parametrs
         }


                 return(
                     <div className="mid-table-container">
                         <UserCartContainer data={this.state.data}/>
                         <StoreTableContainer chippestStoreData={[]}
                                              shufersalData={this.state.shufersalData}
                                              tivTaamData = {this.state.tivTaamData}
                                              ramiLeviData = {this.state.ramiLeviData}
                                              modeToggled={this.props.modeToggled}/>
                     </div>
                 );


        // }

         /*
    if(this.state.isAuth !== "AUTH"){
        usersList = vegetarianList;

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


*/
     }

 }

export default MidTableContainer;




