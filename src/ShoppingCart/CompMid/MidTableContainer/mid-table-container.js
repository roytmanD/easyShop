import React from 'react';
import DataBase from "../../../dataBase/DataBase";
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
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }


    chooseRandomDefaultList(){
        let defLists = ['vegeterian list', 'Maslenica', 'Buffet list', 'English list'];

       return defLists[Math.floor(Math.random()*defLists.length)];
    }
  handleQuantityChange(){
        //this method is demanded for rerendering all the tables after item quantity was IN or DEcremented
      return  this.setState({});
  }

  //let this method be invoked once  for chippestStoreData and three times each for shufersal, tivtaam n ramiLeviData

  calculateListTotal(list){
        if(list !== undefined) {
            let listTotal = 0;
            list.forEach(item => {
                listTotal += parseInt(sessionStorage.getItem(item.itemName), 10) * item.price;
            })
            return listTotal;
        }
  }
  calculateTotal(){
        let optimalPrice = this.calculateListTotal(this.state.chippestStoreData.list);
        let economPrice = this.calculateListTotal(this.state.shufersalData) +
            this.calculateListTotal(this.state.tivTaamData) +
            this.calculateListTotal(this.state.ramiLeviData);
        sessionStorage.removeItem("optimalTotal");
      sessionStorage.removeItem("economTotal");
        sessionStorage.setItem("optimalTotal", optimalPrice);
      sessionStorage.setItem("economTotal", economPrice);
  }

    getDataFromStores(list) {
        shufersalData = DataBase.getUsersListItemsPricedBy('shufersal', list); //assign shufersalDAta to promis with array

        ramiLeviData = DataBase.getUsersListItemsPricedBy('ramiLevi', list);

        tivTaamData = DataBase.getUsersListItemsPricedBy("tivTaam", list);

        let dataFromStores = [Promise.resolve(shufersalData),Promise.resolve(ramiLeviData),Promise.resolve(tivTaamData)];



        let whenResolve = Promise.all(dataFromStores);

        whenResolve.then((dataArray)=>{

            //ok lets think of algorithm
            //what result do we need?
            //1) we need lists for each store with only those of userLists items6 which are cheaper in them
            //2)we need the item list of which lists prices sum is the least
            //thats basicaly.
            //now deeply:
            //1)we take list of items which user whant from DB;
            //2) we compare it's length to each of the store lists length to throw away those which shorter ( we dont need to show incomplite list in optimalMode)
            //3)


             let biggestAssortiment = Math.max(dataArray.length);
            let potentialOptimalLists = [];
                dataArray.forEach(storeData =>{
                if( storeData.list.length === biggestAssortiment){
                  potentialOptimalLists.push(storeData.list);
                }
            });

            let listSums = [0,0,0];

            let cheapestUnicItems = [];

            if(potentialOptimalLists.length>0) {
                for (let i = 0; i < list.length; i++) {

                    // let item0 = potentialOptimalLists[0].list[i];
                    // let item1 = potentialOptimalLists[1].list[i];
                    // let item2 = potentialOptimalLists[2].list[i];

                    let item0 = potentialOptimalLists[0][i];
                    let item1 = potentialOptimalLists[1][i];
                    let item2 = potentialOptimalLists[2][i];

                    if(item0!==undefined){
                    listSums[0] += item0.price;}
                    if(item1!==undefined){
                    listSums[1] += item1.price;}
                    if (item2!==undefined){
                    listSums[2] += item2.price;}

                    //TODO thre is a little mess with stores..  be careful. got to define if tivTaam goes by index 2 or 1

                    //creating th cheapest list
                    if(item0 !== undefined && item1 !== undefined && item2 !== undefined) {
                        let cheapestItem = item0.price > item1.price ? item1.price < item2.price ? [item1, 'ramiLevi'] : [item2, 'tivTaam'] : item0.price < item2.price ? [item0, 'shufersal'] : [item2, 'ramiLevi'];
                        cheapestUnicItems.push(cheapestItem);
                    }
                }
            }


            //here, before setting state, i guess its a good place to calculate econom mode stores lists. here we go!

            //we already got stores full lists in dataArray || shufersalData etc... so. we'll need to shorten em.

            // all we need is just a list of chipest items with unic itemNames. We dont have such yet, but just

            //few lines up we iterate through this lists, let's try to collect the demanded list

            // yay! we got the list cheapestUnicItems ! now lets use it as a filter

            // let filteredStoreLists = [[],[],[]];

            //TODO incomplite data
            if(cheapestUnicItems.length < list.length){
        alert('not all the of your items exist!');
            }

            cheapestUnicItems.forEach(item =>{
                sessionStorage.setItem(item[0].itemName, '1');
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
                        console.log('error: item belongs to unknown store');
                }

            })

            if(listSums[0]< listSums[1]){
                if(listSums[0] < listSums[2]){
                    this.setState({shufersalData: filteredStoreLists[0],
                        tivTaamData: filteredStoreLists[1],
                        ramiLeviData: filteredStoreLists[2],
                        chippestStoreData: {list: potentialOptimalLists[0], store: 'shufersal', listSum: listSums[0]}
                    })
                }else {
                    this.setState({shufersalData: filteredStoreLists[0],
                        tivTaamData: filteredStoreLists[1],
                        ramiLeviData: filteredStoreLists[2],
                        chippestStoreData: {list: potentialOptimalLists[2], store: 'tivTaam', listSum: listSums[2]}
                    })
                }
            }else if(listSums[0]>listSums[1]){
                if(listSums[1] < listSums[2]){
                    this.setState({
                        shufersalData: filteredStoreLists[0],
                        tivTaamData: filteredStoreLists[1],
                        ramiLeviData: filteredStoreLists[2],
                        chippestStoreData: {
                            list: potentialOptimalLists[1],
                            store: 'ramiLevi',
                            listSum: listSums[1]
                        }

                    })
                }else if(listSums[1]>listSums[2]){
                    this.setState({
                        shufersalData: filteredStoreLists[0],
                        tivTaamData: filteredStoreLists[1],
                        ramiLeviData: filteredStoreLists[2],
                        chippestStoreData: {
                            list: potentialOptimalLists[2],
                            store: 'tivTaam',
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
        //we got two basic cases here: curr list exists/no
        if(sessionStorage.getItem("currentList")){
            //getting currList, parsing promise, setting inner data as state.data
            if(this.state.data.length === 0) {
                let currentList = DataBase.getCurrentList();
                currentList.then((data) => {
                    if (this.state.data !== data) {
                        this.setState({data: data});
                    }
                });
            }
            //if chippestStoreData falsy invoke getDataFromStores to request data from store dbs, parse it,
                // make the demanded calculations, form the chippestStoreData obj (optimal mode) and filtered lists (econom mode)

                if (!this.state.chippestStoreData) {
    this.getDataFromStores(this.state.data); //list as param
}
//todo shell we calculate total each time? yet see no reasons to avoid it, it just sets items for sessionStorage
this.calculateTotal();

        return (
            <div className="mid-table-container">
                <UserCartContainer onQuantityChange={this.handleQuantityChange} data={this.state.data}/>
                <StoreTableContainer chippestStoreData={this.state.chippestStoreData}
                                     shufersalData={this.state.shufersalData}
                                     tivTaamData={this.state.tivTaamData}
                                     ramiLeviData={this.state.ramiLeviData}
                                     modeToggled={this.props.modeToggled}/>
            </div>
        );
    }else{
        //this case is for no currList exists
            return (
                <div id="createListBlock">You haven't created list yet!
                    <a id="createListLink" href="/">CREATE LIST</a>
                </div>
            )
        }
    }
}

export default MidTableContainer;
