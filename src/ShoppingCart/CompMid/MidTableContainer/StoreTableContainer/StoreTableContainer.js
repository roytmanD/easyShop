import React from 'react';
import store_1 from "../../../../Images/store_1@2x.png";
import store_2 from "../../../../Images/store_2@2x.png";
import store_3 from "../../../../Images/store_3@2x.png";
import {ItemsTable} from "../ItemsTable/ItemsTable";
import '../MidTableContainer.css';


export class StoreTableContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modeToggled: this.props.modeToggled,
            chippestStoreData: this.props.chippestStoreData,
            shufersalData : this.props.shufersalData,
            tivTaamData: this.props.tivTaamData,
            ramiLeviData: this.props.ramiLeviData
        }
    }
    render() {


        if(this.props.modeToggled !== this.state.modeToggled ||
            this.props.shufersalData !== this.state.shufersalData ||
            this.props.tivTaamData !== this.state.tivTaamData ||
            this.props.ramiLeviData !== this.state.ramiLeviData ||
            this.props.chippestStoreData != this.state.chippestStoreData
        ){
            this.setState({modeToggled: this.props.modeToggled,
                chippestStoreData:this.props.chippestStoreData,
            shufersalData: this.props.shufersalData,
            tivTaamData: this.props.tivTaamData,
            ramiLeviData: this.props.ramiLeviData});
        }
        switch (this.state.modeToggled) {
            case "optimal":
                return(

                    <div id="stores-table-container">
                        <span className="stores-logo-container">
                            <div className="store-logo-container">
                                <img src={store_1}/>
                            </div>
                        </span>
                        <ItemsTable  storeData={this.state.shufersalData} extended={true} size="full" incrementable={false}/>
                    </div>

                );

                //^^^^ pass chipestStoreList to single ItemTable element
                break;
            case "econom":
                return(
                    <div id='stores-table-container'>
                        <span className="stores-logo-container">
                            <div className="store1-logo-container-small">
                                <img src={store_1}/>
                            </div>

                            <div className="store2-logo-container-small" id="green">
                                <img src={store_2}/>
                            </div>

                            <div className="store3-logo-container-small">
                                <img src={store_3}/>
                            </div>
                        </span>
                        <ItemsTable storeData={this.state.shufersalData} extended={true} size="small" incrementable={false}/>
                        <ItemsTable storeData={this.state.tivTaamData} extended={true} size="small" incrementable={false}/>
                        <ItemsTable storeData={this.state.ramiLeviData} extended={true} size="small" incrementable={false}/>
                    </div>
                ); //pass each stores list to each of the three itemsTables
                break;
        }

    }
}