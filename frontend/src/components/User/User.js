import React from "react";
import {UserDetailsStyle} from './User.styles';
import user_image from '../../assets/user_image.png';

const User = (props) => {
    // console.log("porps =", props)

    return (
        <UserDetailsStyle>
            <div className="top-section">
                <div className="user-profile-image"
                     style={{backgroundImage:`url(${props.user.profile_picture})`}}>
                </div>
                <div className={'right'}>
                    {props.user.first_name && <div className="name">
                        {props.user.first_name} {props.user.last_name[0]}.
                    </div>}
                    {props.user.reviews && props.user.reviews.length} Reviews in total
                </div>
            </div>
            <div className="middle-section">
                <p className="description-text">
                    {props.user.description}
                    <span>read more</span></p>
            </div>

        </UserDetailsStyle>
    )
}
export default User