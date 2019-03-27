import React from 'react';
import './CarousalElement.css';
import {CarousalCard} from '../../../catalogue/Catalogue';
import {Redirect} from 'react-router-dom';
import CardBody from './cardBody/CardBody'
import DataBase, {API_KEY, BASE_URL, GET_shopLists_Url} from "../../../dataBase/DataBase";
import $ from "jquery";

let currInps = [];
let clicked = false;
let editMode = false;
let values = [];




class NewInput {
    constructor(ref) {
        this.ref = ref;
        this.input = <textarea ref={ref}/>
    }
}


class EditText {
    constructor(ref, value) {
        this.ref = ref;
        this.input = <textarea ref={ref} defaultValue={value}/>
    }
}


class CarousalElement extends React.Component {


    constructor(props) {
        super(props);
        this.listName=this.props.carCard.name;
        this.handleNewItem = this.handleNewItem.bind(this);
        this.handleListChoice = this.handleListChoice.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            clicked: clicked,
            editMode: editMode,
            listInputs: this.props.carCard.list.map((li) => new EditText(React.createRef(), li)),
            list: this.props.carCard.list,
            newInputs: currInps
        };
        this.addNewInpsBtn = <button onClick={this.handleNewItem}>+</button>;
    }

    handleNewItem() {
        currInps.push(new NewInput(React.createRef()));
        this.setState(
            {
                newInputs: currInps
            })
    }


        handleSave()
        { //todo fix the editing bags
            let inpvalue;
            let currListInputs = this.state.listInputs;
            let currNewInputs = this.state.newInputs;
            for (let i = 0; i < currListInputs.length; i++) {
                console.log(i);
                inpvalue = currListInputs[i].ref.current.value;
                values[i] = inpvalue;
                if (inpvalue === '') {
                    currListInputs.splice(i, 1);
                    values.splice(i, 1)
                }
            }
            for (let i = 0; i < currNewInputs.length; i++) {
                inpvalue = currNewInputs[i].ref.current.value;
                values[i + currListInputs.length] = inpvalue;
                if (inpvalue === '') {
                    currNewInputs.splice(i,1);
                    values.splice(i + currListInputs.length, 1)
                }
            }
            currInps = [];
            this.listName=this.listName.ref.current.value;
            this.setState((state) => {
                    return {
                        editMode: !state.editMode,
                        listInputs: values.map((value => new EditText(React.createRef(), value))),
                        list: values,
                        newInputs: currInps

                    }
                }
            );

            setTimeout(() => DataBase.updateListList(this.props.carCard.id, values), 0);
            //todo update list name
        }



        handleListChoice()
        {
            sessionStorage.setItem("currentList", this.props.carCard.roughName);
            console.log(sessionStorage);
            clicked = !clicked;
            if (clicked) {
                this.setState({
                    clicked: clicked
                })
            }
            clicked = !clicked;
        }


        render()
        {
            let goBtn;
            if (this.props.carCard.removeBtn === "") {
                goBtn = (<a href='/cart'>Go to cart</a>)
            }
            else goBtn = (<button onClick={this.handleListChoice}> Go to cart</button>);

            let editBtn = <button onClick={() => this.setState({editMode: !this.state.editMode})}>edit</button>
            let carCard = this.props.carCard;
            if (carCard === undefined) carCard = new CarousalCard('', [''], '', '');
            console.log(carCard);
            let saveBtn = '';
            if (this.state.editMode) {
                saveBtn = (<button onClick={this.handleSave}>save</button>);
                editBtn = saveBtn;
                let nameEdit=new EditText(React.createRef(),this.listName);
                this.listName=nameEdit.input
            }
            if (this.state.clicked) {

                return <Redirect to={'/cart'}/>
            }

            return (
                <div className='card'>
                    <div className='red'>
                        {carCard.removeBtn}
                        {this.listName}
                        {carCard.isPrivate}
                        {editBtn}
                    </div>
                    <CardBody
                        editMode={this.state.editMode}
                        listInputs={this.state.listInputs}
                        list={this.state.list}
                        newInputs={this.state.newInputs}
                        addNewInputsBtn={this.addNewInpsBtn}
                        goBtn={goBtn}
                    />
                </div>
            )
        }
    }


    export
    default
    CarousalElement;