import React from 'react';

let form=(<form className='form-group dropdown-item'>
    <input className='email'/>
    <input className='password'/>
</form>);


class SignUp extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
      //      button: <button className='dropdown-header' onClick={this.handleSignUp}>Sign up</button>,
            form: form
        }
    }




    render() {
        return (
            <div>
                {this.state.form}
            </div>
        )
    }
}

export default SignUp;