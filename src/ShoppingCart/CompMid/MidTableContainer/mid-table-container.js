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


         shufersalData = DataBase.getUsersListItemsPricedBy('shufersal1', list); //assign shufersalDAta to promis with array

         ramiLeviData = DataBase.getUsersListItemsPricedBy('ramiLevi', list);

         tivTaamData = DataBase.getUsersListItemsPricedBy("tivTaam", list);
//
       //  let economList = list;

         //shuf
         shufersalData.then((data) => {
             let tempData = [];
            let listPrice =0;
//console.log(economList);
             for (let i = 0; i < data.length; i++) {
                 tempData.push([data[i].itemName, data[i].price, data[i].quantity]);
                // economList.push({item:data[i], store: 'shufersal'});

                 listPrice += data[i].price;

                 // for (let j = 0; j < list.length; j++) {
                 //     if (data[i].itemName === list[j]{
                 //         economList.push(({item:data[i], store: 'shufersal'}));
                 //     }
                 // }





             }

          //   console.log(economList);

             if(this.state.shufersalData.length ===0 && data.length === list.length) { //second condition is for adding to chippsest store table store data with incomplite list
                 this.setState({
                     shufersalData: tempData,
                     chippestStoreData: {name: 'shufersal', minSum: listPrice, chippestList: tempData}
                 });
             }else{
                 this.setState({
                     shufersalData :tempData,
                 })
             }
         })

         //tiv
         tivTaamData.then((data) => {
             let tempData = [];
             let listPrice =0;
        //    let economList = this.state.economList;
            let j =0;

             for (let i = 0; i < data.length; i++) {
                 tempData.push([data[i].itemName, data[i].price, data[i].quantity]);
                 listPrice += data[i].price;

                 // if (data[i].price < economList[j].item.price && data[i].itemName === economList[j].item.itemName){
                 //     economList.replace(economList[j], {item: data[i], store: 'tivTaam'});
                 // }else if (data[i].itemName !== economList[j].item.itemName){
                 //
                 //     economList.splice(j, 0, {item: data[i], store: 'tivTaam'});
                 //     j++;
                 // }
                 //
                 //
                 // j++;

                 // for (let j = 0; j < economList.length; j++) {
                 //     if(economList[j].item.itemName ===  data[i].itemName){
                 //         if (data[i].price < economList[j].item.price) {
                 //             economList.replace(economList[j], { item:data[i], store:'tivTaam'});
                 //         }
                 //     }
                 // }
                     }

             if (this.state.tivTaamData.length === 0 ) {
                 if (listPrice < this.state.chippestStoreData.minSum && data.length === list.length ||
                 this.state.chippestStoreData.minSum === undefined && data.length === list.length) {
                     this.setState(
                         {
                             tivTaamData: tempData,
                             chippestStoreData:
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
         //    let economList = this.state.economList;
             let j = 0;
             for (let i = 0; i < data.length; i++) {
                 tempData.push([data[i].itemName, data[i].price, data[i].quantity]);

                 listPrice+=data[i].price;
                 // if (data[i].price < economList[j].item.price && data[i].itemName === economList[j].item.itemName){
                 //     economList.replace(economList[j], {item: data[i], store: 'ramiLevi'});
                 // }else if (data[i].itemName !== economList[j].item.itemName){
                 //
                 //     economList.splice(j, 0,  {item: data[i], store: 'ramiLevi'});
                 //     j++;
                 // }
                 //
                 //
                 // j++;

                 // for (let j = 0; j < economList.length; j++) {
                 //     if(economList[j].item.itemName ===  data[i].itemName){
                 //         if (data[i].price < economList[j].item.price) {
                 //             economList.replace(economList[j], {item: data[i].price, store: 'ramiLevi'});
                 //         }
                 //     }
                 // }

             }

             //go through economList and short item lists for each store by cutting out the items which cheaper in other store
             // let shufersalShortedList =[];
             // let tivTaamShortedList = [];
             // let ramiLeviShortedList = [];

             //console.log(economList);
             // for (let i = 0; i < economList.length; i++) {
             //     switch (economList[i].store) {
             //         case 'shufersal':
             //             shufersalShortedList.push(economList[i].item);
             //             break;
             //         case 'tivTaam':
             //             tivTaamShortedList.push(economList[i].item);
             //             break;
             //         case 'ramiLevi':
             //             ramiLeviShortedList.push(economList[i].item);
             //             break;
             //     }
             //
             //
             // }

        // console.log(shufersalShortedList);
        //      console.log(tivTaamShortedList);
        //      console.log(ramiLeviShortedList);
        //
        //
        //      if(this.state.ramiLeviData.length === 0 ) {
        //
        //          if (listPrice < this.state.chippestStoreData.minSum && data.length === list.length ||
        //              this.state.chippestStoreData.minSum === undefined && data.length === list.length) {
        //              this.setState(
        //                  {
        //                      shufersalData: shufersalShortedList,
        //                      tivTaamData: tivTaamShortedList,
        //                      ramiLeviData: ramiLeviShortedList,
        //                      chippestStoreData:
        //                          {name: 'ramiLevi',
        //                              minSum: listPrice,
        //                              chippestList: tempData}
        //                  })
        //          }else {
        //              this.setState(
        //                  {
        //                      shufersalData: shufersalShortedList,
        //                      tivTaamData: tivTaamShortedList,
        //                      ramiLeviData: ramiLeviShortedList
        //                  })
        //          }
        //      }



             if(this.state.ramiLeviData.length === 0 ) {
                 if (listPrice < this.state.chippestStoreData.minSum && data.length === list.length ||
                     this.state.chippestStoreData.minSum === undefined && data.length === list.length) {
                     this.setState({
                         ramiLeviData: tempData,
                          chippestStoreData:
                             {name: 'ramiLevi', minSum: listPrice, chippestList: tempData}
                     });
                 }else {
                     this.setState({ramiLeviData: tempData});
                 }
             }
         })

//вроде как в this.state.econmList щс лежит дешевый лист
     }


     render() {



        if(this.state.isAuth !== 'AUTH'){
            this.setState({data: vegetarianList});
        }else if (this.state.isAuth === 'AUTH' && this.state.data.length === 0) {
             let currentList = DataBase.getCurrentList();
            currentList.then((data) => {
                 this.setState({data: data});
             })
         }



         if (this.state.ramiLeviData.length === 0 ||
             this.state.shufersalData.length === 0||
             this.state.tivTaamData === 0) {

             this.getDataFromStores(this.state.data); //TODO user list to parametrs
         }


         return (
             <div className="mid-table-container">
                 <UserCartContainer data={this.state.data}/>
                 <StoreTableContainer shufersalData={this.state.shufersalData}
                                      tivTaamData={this.state.tivTaamData}
                                      ramiLeviData={this.state.ramiLeviData}
                                      modeToggled={this.props.modeToggled}/>
             </div>
         );


     }
 }

export default MidTableContainer;




