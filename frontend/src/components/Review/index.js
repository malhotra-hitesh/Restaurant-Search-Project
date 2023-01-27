import React, {useEffect, useState} from "react";
import axios from "axios";
import {setEmail} from "../../features/slice/authSlice";
import "./Review.css";


const Review = (props) => {
    const [newWarning, setNewWarning] = useState('');
    const [userData, setUserData] = useState('')
    const [restaurantData, setRestaurantData] = useState('')
    const access= localStorage.getItem("access");
    const config = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${access}`,
        },
    }

    const getUserAndRestaurantData = async(config) => {
        try {
            /*fetch author review*/
            const resUser = await axios.get(`https://luna-group2.propulsion-learn.ch/backend/api/users/${props.review.author}/`, config);
            console.log(resUser);
            setUserData(resUser.data);
            console.log('userData', userData)


            /*fetsch restaurant which review is associated with*/
            const resRestaruant = await axios.get(`https://luna-group2.propulsion-learn.ch/backend/api/restaurants/${props.review.restaurant}/`, config);
            console.log(resRestaruant);
            setRestaurantData(resRestaruant.data);
            console.log('restaurantData', restaurantData)
        }
        catch(e) {
            setNewWarning(e.message);
        }
    }

    useEffect(()=>{
        getUserAndRestaurantData(config);
        },[])

    return (
        <>
        {userData && (<div className="ReviewCard">
            <div className="UserCard">
                <div className="UserImageclick">
                    {userData.profile_picture ? <img src={userData.profile_picture}/>: <div className="user-initial">{userData.first_name[0]}</div> }
                </div>
                <div className="Infos">
                    <p className="Usernameclick">{userData.first_name} {userData.last_name}</p>
                    <p className="clickable">{userData.reviews.length} reviews in total</p>
                </div>
            </div>
            <div className="Review">
                <p className="RestaurantNameClick">{restaurantData.name}</p>
                <p>{props.review.content}</p>
                <div className="LikeComment">
                    <button>Like {props.review.liked_by.length}</button>
                    <div className="Placeholder"></div>
                    <button>Comment</button>
                </div>
            </div>
            <div className="Comments">
                <p className="LatestComments">Latest comments</p> {/*We don't have comments... You can remove this part or hardcode it, as you want :)*/}
                <div className="UserPageComment">
                    <div className='dateReviewNumber'>
                        <p>{props.date}</p>
                    </div>
                    <p>{props.content}</p>
                </div>
            </div>
        </div> ) }
        </>
    )

    // return(
    //     <div> Review</div>
    // )
}

export default Review;