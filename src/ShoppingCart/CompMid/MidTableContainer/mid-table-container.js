import React from 'react';
import DataBase, {sessionStorage} from "../../../dataBase/DataBase";
import {UserCartContainer} from "./UsersCart/UserCartContainer";
import {StoreTableContainer} from "./StoreTableContainer/StoreTableContainer";
import "./MidTableContainer.css";

let shufersalData = [];
let ramiLeviData = [];
let tivTaamData = [] ;


let filteredStoreLists = [[],[],[]];


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
        data: [],
        shufersalData: [],
        ramiLeviData: [],
        tivTaamData: [],
        chippestStoreData: false
    }

this.getDataFromStores = this.getDataFromStores.bind(this);
}

componentWillMount(){
    //sessionStorage.setItem("currentList","h");

}

     getDataFromStores(list) {

         shufersalData = DataBase.getUsersListItemsPricedBy('shufersal', list); //assign shufersalDAta to promis with array

         ramiLeviData = DataBase.getUsersListItemsPricedBy('ramiLevi', list);

         tivTaamData = DataBase.getUsersListItemsPricedBy("tivTaam", list);

          let dataFromStores = [Promise.resolve(shufersalData),Promise.resolve(ramiLeviData),Promise.resolve(tivTaamData)];



         let whenResolve = Promise.all(dataFromStores);

         whenResolve.then((dataArray)=>{
             let shufersalData = dataArray[0];
             let tivTaamData = dataArray[1];
             let ramiLeviData = dataArray[2];

             console.log(dataArray);


         //ok lets think of algorithm
             //what result do we need?
             //1) we need lists for each store with only those of userLists items6 which are cheaper in them
             //2)we need the item list of which lists prices sum is the least
             //thats basicaly.
             //now deeply:
             //1)we take list of items which user whant from DB;
             //2) we compare it's length to each of the store lists length to throw away those which shorter ( we dont need to show incomplite list in optimalMode)
             //3)

             //1)list
             //2)
             let potentialOptimalLists = dataArray.filter(storeData =>{
                 return storeData.list.length === list.length
             });
             console.log(potentialOptimalLists); //ok

             if(potentialOptimalLists===[]){
                 alert("there is no store where you can collect your list, you will be switched to economy mode! ");
                 this.setState({modeToggled: 'economy'});
             }

            let listSums = [0,0,0];

let cheapestUnicItems = [];
             for (let i = 0; i < list.length; i++) {

               let  item0 =potentialOptimalLists[0].list[i];
                 let  item1 =potentialOptimalLists[1].list[i];
                 let  item2 =potentialOptimalLists[2].list[i];

                 listSums[0] += item0.price;
                 listSums[1] += item1.price;
                 listSums[2] += item2.price;

                 //TODO thre is a little mess with stores..  be careful. got to define if tivTaam goes by index 2 or 1

                 //creating th cheapest list
                 let cheapestItem = item0.price > item1.price ? item1.price < item2.price ? [item1, 'ramiLevi'] : [item2, 'tivTaam'] : item0.price < item2.price ? [item0, 'shufersal'] : [item2, 'ramiLevi'];

                    cheapestUnicItems.push(cheapestItem);
             }

             //here, before setting state, i guess its a good place to calculate econom mode stores lists. here we go!

             //we already got stores full lists in dataArray || shufersalData etc... so. we'll need to shorten em.

             // all we need is just a list of chipest items with unic itemNames. We dont have such yet, but just

             //few lines up we iterate through this lists, let's try to collect the demanded list

             // yay! we got the list cheapestUnicItems ! now lets use it as a filter

            // let filteredStoreLists = [[],[],[]];
             cheapestUnicItems.forEach(item =>{

                 switch (item[1]) {
                     case "shufersal":
                         filteredStoreLists[0].push(item[0]);
                         break;
                     case "tivTaam":
                         filteredStoreLists[1].push(item[0]);
                         break;
                     case "ramiLevi":
                         filteredStoreLists[2].push(item[0]);
                         break;
                     default:
                         console.log('suck dick');
                 }

             })//TODO not functional yet

             console.log(filteredStoreLists);


             if(listSums[0]< listSums[1]){
                 if(listSums[0] < listSums[2]){
                     this.setState({shufersalData: filteredStoreLists[0],
                         tivTaamData: filteredStoreLists[1],
                         ramiLeviData: filteredStoreLists[2],
                         chippestStoreData: {list: potentialOptimalLists[0].list, store: potentialOptimalLists[0].store, listSum: listSums[0]}
                     })
                 }else {
                     this.setState({shufersalData: filteredStoreLists[0],
                         tivTaamData: filteredStoreLists[1],
                         ramiLeviData: filteredStoreLists[2],
                         chippestStoreData: {list: potentialOptimalLists[2].list, store: potentialOptimalLists[2].store, listSum: listSums[2]}
                     })
                 }
             }else if(listSums[0]>listSums[1]){
                 if(listSums[1] < listSums[2]){
                      this.setState({
                         shufersalData: filteredStoreLists[0],
                         tivTaamData: filteredStoreLists[1],
                         ramiLeviData: filteredStoreLists[2],
                         chippestStoreData: {
                             list: potentialOptimalLists[1].list,
                             store: potentialOptimalLists[1].store,
                             listSum: listSums[1]
                         }

                     })
                 }else if(listSums[1]>listSums[2]){
                     this.setState({
                         shufersalData: filteredStoreLists[0],
                         tivTaamData: filteredStoreLists[1],
                         ramiLeviData: filteredStoreLists[2],
                         chippestStoreData: {
                             list: potentialOptimalLists[2].list,
                             store: potentialOptimalLists[2].store,
                             listSum: listSums[2]
                         }
                     })
                 }
             }





         }).catch((rejectionReason) =>{
             console.log(rejectionReason)
         })





     }



     render() {
    console.log(this.state.shufersalData);
    console.log(sessionStorage);

        if(this.state.isAuth !== 'AUTH'){


            this.setState({data: vegetarianList});
        }
        else if (this.state.isAuth === 'AUTH' && this.state.data.length === 0) {
             let currentList = DataBase.getCurrentList();
            currentList.then((data) => {
                 this.setState({data: data});
             })
         }



//


         if (!this.state.chippestStoreData) {

             this.getDataFromStores(this.state.data); //TODO user list to parametrs //
         }
         console.log(filteredStoreLists);


         console.log(this.state.chippestStoreData);

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




