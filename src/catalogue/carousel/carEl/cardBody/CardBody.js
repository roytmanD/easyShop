import React from 'react';

class CardBody extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        console.log(this.props.newInputs);
        console.log(this.props.addNewInputsBtn);
        if (this.props.editMode)
            return (<div className='card-body'>
                    <ul>
                        {this.props.listInputs.map((li, i) =>
                            <li>
                                {li.input}
                            </li>)}
                    </ul>
                    {this.props.addNewInputsBtn}
                    {this.props.newInputs.map((input) => input.input)}
                </div>
            )
        else return (
            <div className='card-body'>
                {this.props.goBtn}
                <ul>
                    {this.props.list.map((li) => {
                        return (
                            <li>
                                {li}
                            </li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default CardBody;