import React from 'react';


class Profile extends React.Component{
    render(){
        return(
            <div>
                {sessionStorage.getItem('lastAuth')}
                {this.props.logoutBtn}
            </div>
        )
    }
}

export default Profile;