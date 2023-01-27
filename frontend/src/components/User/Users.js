import React from "react";
import {UserDetailsStyle} from './Users.styles';
import user_image from '../../assets/user_image.png';

const UserProfilesDetails = (props) => {
    //const user = props.user

    return (
        <UserDetailsStyle>
            <div className="top-section">
                <div className="user-profile-image"
                     style={{backgroundImage:`url(${user_image})`}}>
                </div>
            </div>
            <div className="middle-section">
                <p className="description-text">
                    {UserProfilesDetails.id}{UserProfilesDetails.description}
                    <span>read more</span></p>
            </div>

        </UserDetailsStyle>
    )
}
export default UserProfilesDetails