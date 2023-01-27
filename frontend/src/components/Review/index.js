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
        {userData && (<ReviewCard>
            <UserCard>
                    {userData.profile_picture ? <img src={userData.profile_picture}/>: <div className="user-initial">{userData.first_name[0]}</div> }

                <Infos>
                    {/* <NameUser> */}
                    <h2 className="Usernameclick">{userData.first_name} {userData.last_name}</h2>
                    {/* </NameUser> */}
                    {/* <NumbersReview> */}
                    <p className="clickable">{userData.reviews.length} reviews in total</p>
                    {/* </NumbersReview> */}
                </Infos>
            </UserCard>
            <Revieww>
                <RestaurantName>
                <p className="RestaurantNameClick">{restaurantData.name}</p>
                </RestaurantName>
                <Content>
                <p>{props.review.content}</p>
                </Content>
                <LikeComment>
                    <button>Like {props.review.liked_by.length}</button>
                    <div className="Placeholder"></div>
                    <button>Comment</button>
                </LikeComment>
            </Revieww>
        </ReviewCard> ) }
        </>
    )


}

export default Review;