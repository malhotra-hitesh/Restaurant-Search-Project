import React from "react";
import {UserDetailsStyle} from './User.styles';
import user_image from '../../assets/user_image.png';

const User = (props) => {
    console.log("porps =", props)

    return (
        <UserDetailsStyle>
            <div className="top-section">
                <div className="user-profile-image"
                     style={{backgroundImage:`url(${props.user.profile_picture})`}}>
                </div>
            </div>
            <div className="middle-section">
                <p className="description-text">
                    {props.user.id}{props.user.description}
                    <span>read more</span></p>
            </div>

        </UserDetailsStyle>
    )
}
export default User