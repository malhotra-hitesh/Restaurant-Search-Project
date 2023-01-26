import  profile from '../../assets/profile.png';
import  star from '../../assets/star.svg';
import  edit from '../../assets/edit.svg';
import React, {useEffect, useState} from 'react';
import  comment from '../../assets/comment.svg';
import  restaurant from '../../assets/restaurant.svg';
import {Vjosa, UserProfileStyled, Nina, Sara} from "./UserProfile.styled";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../features/slice/userSlice'


const UserProfile = () => {
const [data, setData] = useState({
        type: 'reviews'
    });

    const dispatch = useDispatch();
    const userData = useSelector(store => store.userProfile.userProfileSlice)
     // aveer.harland@moabuild.com 123
    useEffect(() => {
     dispatch(fetchUser())

    },[])
       const handleClick = e => {
        console.log("clickeedddd")
        setData(prevState => {
            return {...prevState,
                    [e.target.name]: e.target.value}
        });

    };
  return (<>
    <UserProfileStyled>
  <div>
    <Vjosa>
    <Nina>
      <span><img src={profile}/></span>
         <span>{userData?.username}'s Profile</span>
      <Nina>
        <button type="button" name='type' value='reviews' onClick={handleClick}><img src={star}/>Reviews</button>
        <button type="button" name='type' value='comments' onClick={handleClick}><img src={comment}/>Comments</button>
        <button type="button" name='type' value='restaurants' onClick={handleClick}><img src={restaurant}/>Restaurants</button>
        <button type="button" name='type' value='edit' onClick={handleClick}><img src={edit}/>Edit Profile</button>
      </Nina>
    </Nina>
   <Nina>
      <span>{userData?.username}</span>
      <span>{userData?.location}</span>
      <span>Reviews</span>
      <span>Comments</span>
    {/*  Conditional Rendering */}
       {data.type === 'reviews' ?
                        <Sara>
                               <span>REVIEWS</span>


                        </Sara> : null }
        {data.type === 'comments' ? <Sara>Comments </Sara> : null }
        {data.type === 'restaurants' ? <Sara>Restaurants </Sara> : null }
        {data.type === 'edit' ? <Sara>Edit </Sara> : null }
    </Nina>
    <Nina>
      <label>Location</label>
        <span>{userData?.location}</span>
       <label>Luna member since</label>
        <span>{userData?.date_joined}</span>
        <label>Things I love</label>
        <span>{userData?.things}</span>
        <label>Description</label>
        <span>{userData?.description}</span>
    </Nina>
      </Vjosa>
  </div>

      </UserProfileStyled>
  </>)
}

export default  UserProfile