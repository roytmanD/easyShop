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
    ['broccoli'],
    ['soy beans'],
    ['tofu'],
    ['rice'],
    ['potatoes']
]


let lists ;//LIST frim db // TODO

//TODO mid table container will pass incrementable propperty
 class MidTableContainer extends React.Component {
constructor(props){
    super(props);
    this.state = {
        isAuth: this.props.isAuth,
        modeToggled: this.props.modeToggled,
        data:[],
        shufersalData:[],
        ramiLeviData:[],
        tivTaamData: [],
        chippestStoreData:[]
    }
this.getDataFromStores = this.getDataFromStores.bind(this);
}

     getDataFromStores(list) {

console.log(list);//TODO TOJe pusto, idem vyshe
         shufersalData = DataBase.getUsersListItemsPricedBy('shufersal1', list); //assign shufersalDAta to promis with array
         // this.openPromiceFromEachStoreWrapper(shufersalData, "shufersal");

         ramiLeviData = DataBase.getUsersListItemsPricedBy('ramiLevi', list);

         tivTaamData = DataBase.getUsersListItemsPricedBy("tivTaam", list);

         //shuf
         shufersalData.then((data) => {
             let tempData = [];
            let listPrice =0;

             for (let i = 0; i < data.length; i++) {
                 tempData.push([data[i].itemName, data[i].price, data[i].quantity]);

                 listPrice += data[i].price;
             }

             console.log(tempData);
             if(this.state.shufersalData.length ===0) {
                 this.setState({
                     shufersalData: tempData,
                     chippestStoreData: {name: 'shufersal', minSum: listPrice, chippestList: tempData}
                 });
             }
         })


         //tiv
         tivTaamData.then((data) => {
             let tempData = [];
             let listPrice =0;

             console.log(this.state.chippestStoreData);
             for (let i = 0; i < data.length; i++) {
                 tempData.push([data[i].itemName, data[i].price, data[i].quantity]);

                 listPrice += data[i].price;
             }

             if (this.state.tivTaamData.length === 0) {
                 if (listPrice < this.state.chippestStoreData.minSum) {
                     this.setState(
                         {
                             tivTaamData: tempData, chippestStoreData:
                                 {name: 'tivTaam', minSum: listPrice, chippestList: tempData}
                         });
                 } else {
                     this.setState({tivTaamData: tempData});
                 }
             }

         })
         //rami
         ramiLeviData.then((data) => {
             let tempData = [];
             let listPrice = 0;
console.log("если моя теория верна то тут мы не окажемся")
             for (let i = 0; i < data.length; i++) {
                 tempData.push([data[i].itemName, data[i].price, data[i].quantity]);

                 listPrice+=data[i].price;
             }
             if(this.state.ramiLeviData.length === 0) {
                 if (listPrice < this.state.chippestStoreData.minSum) {
                     this.setState({
                         ramiLeviData: tempData, chippestStoreData:
                             {name: 'ramiLevi', minSum: listPrice, chippestList: tempData}
                     });
                 }
                 this.setState({ramiLeviData: tempData});
             }
         })



     }


     countListPriceInStore(storeData){
    let sumPrice = 0;
         for (let i = 0; i < storeData.length; i++) {
             sumPrice += storeData[i].price;
         }

         return sumPrice;
     }
     render() {


    console.log(this.state.data);
    console.log(this.state.isAuth);
        if(this.state.isAuth !== 'AUTH'){
            this.setState({data: vegetarianList});
        }else if (this.state.isAuth === 'AUTH' && this.state.data.length === 0) {
             let currentList = DataBase.getCurrentList();
            currentList.then((data) => {
                 this.setState({data: data});
             })
         }


//


         if (this.state.ramiLeviData.length === 0 ||
             this.state.shufersalData.length === 0||
             this.state.tivTaamData === 0) {

             this.getDataFromStores(this.state.data); //TODO user list to parametrs
         }

         return (
             <div className="mid-table-container">
                 <UserCartContainer data={this.state.data}/>
                 <StoreTableContainer chippestStoreData={this.state.chippestStoreData}
                                      shufersalData={this.state.shufersalData}
                                      tivTaamData={this.state.tivTaamData}
                                      ramiLeviData={this.state.ramiLeviData}
                                      modeToggled={this.props.modeToggled}/>
             </div>
         );


     }
 }

export default MidTableContainer;




