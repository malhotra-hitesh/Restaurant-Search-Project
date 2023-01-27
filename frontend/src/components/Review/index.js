import React, {useEffect, useState} from "react";
import axios from "axios";
import {setEmail} from "../../features/slice/authSlice";
import "./Review.css";
import { ReviewCard, UserCard, ImageClick, Infos, Revieww, RestaurantName, LikeComment, Content } from "./Review.styled";
import Restaurant from "../Restaurant/Restaurant";


const ReviewContainer = (props) => {
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

export default ReviewContainer;