import React from 'react';


class Profile extends React.Component{
    render(){
        return(
            <div>
                {this.props.logoutBtn}
            </div>
        )
    }
}

export default Profile;