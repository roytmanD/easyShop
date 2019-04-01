import React from 'react';

class LocationLeftBar extends React.Component{
constructor(props){
    super(props);

    this.inputRef = React.createRef();
    this.state={
        change:false
    };

    this.changeFilter = this.changeFilter.bind(this);
}




changeFilter(){

    console.log(sessionStorage);
  let stores = [
      sessionStorage.getItem('shufersalIsChecked'),
      sessionStorage.getItem('rami+leviIsChecked'),
      sessionStorage.getItem('tiv+taamIsChecked')
  ];

  let checkedStores = [];
  stores.forEach(store=>{
      if(store!==null){
          checkedStores.push(store);
      }
  })
  console.log(checkedStores);
    this.props.handleFilterChange(checkedStores, this.inputRef.current.value);
}


    render() {
let x=500;
if(this.state.change){
    x=this.inputRef.current.value
}
        return(
            <div id='location-left'>
                <div className="radius-block">
                    <p><strong>LOCATE </strong>FOODSTORES NEARBY</p>
                        <input onChange={()=>{this.setState({
                            change:true
                        })}} type="range" id="radius" ref={this.inputRef} min="500" max="10000" />
                </div>
                <p className="radius-m">{x} meters</p>
           <StoreFilterBox/>

                <button onClick={this.changeFilter} className='apply-radius-btn'>Apply</button>

            </div>
        );
    }
}

export default LocationLeftBar;



class StoreFilterBox  extends React.Component{
constructor(props){
    super(props);
}


    render() {

        return(
            <div className="stores-filter">
                <div className="store-filter">
                    <p>Shufersal</p>
                    <CheckBox name="shufersal"></CheckBox>
                </div>
                <div className="store-filter">
                    <p>Rami Levi</p>
                    <CheckBox name="rami+levi"></CheckBox>
                </div>
                <div className="store-filter">
                    <p>Tiv Taam</p>
                    <CheckBox name="tiv+taam"></CheckBox>
                </div>
            </div>
        );
    }

}



class CheckBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isChecked: true};
        this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox
    }

    handleChecked () {
        if(this.state.isChecked){
            console.log(sessionStorage);
            sessionStorage.setItem(this.props.name+"IsChecked", this.props.name)
        }else{
            sessionStorage.removeItem(this.props.name+"IsChecked");
        }
        this.setState({isChecked: !this.state.isChecked});
    }

    render(){
        let txt;
        // if (this.state.isChecked) {
        //     txt = 'checked'
        // } else {
        //     txt = 'unchecked'
        // }

        // remove () after handleChecked because you need pass
        // reference to function
        // also add return before <div>
        return <div>
            <input type="checkbox" onChange={ this.handleChecked }/>
            {/*<p>This box is {txt}</p>*/}
        </div>
    }
}

