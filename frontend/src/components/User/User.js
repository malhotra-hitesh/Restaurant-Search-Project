import React from "react";
import {UserDetailsStyle} from './User.styles';


const User = (props) => {
    console.log("porps =", props)

    return (

        <UserDetailsStyle>
            <div className="top-section">
                <div className="user-profile-image"
                     style={{backgroundImage:`url(${props.user.profile_picture})`}}>
                </div>
                <div classname="name-detail">
                <p className="username">{props.user.username} </p>
                </div>
            </div>

            <div className="last-section">
                <p className="description-text">
                    {props.user.description}</p>
                <span>read more</span>
            </div>

        </UserDetailsStyle>
    )
}
export default User