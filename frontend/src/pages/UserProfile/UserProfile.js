import  profile from '../../assets/profile.png';
import  star from '../../assets/star.svg';
import  edit from '../../assets/edit.svg';
import React, {useEffect, useState} from 'react';
import  comment from '../../assets/comment.svg';
import  restaurant from '../../assets/restaurant.svg';
import { UserProfileStyled, Nina, Sara, AboutProfile} from "./UserProfile.styled";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../features/slice/userSlice'
import {useNavigate} from "react-router-dom";


const UserProfile = () => {
const [data, setData] = useState({
        type: 'reviews'
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector(store => store.userProfile.userProfileSlice)
    useEffect(() => {
        dispatch(fetchUser())

    },[])
       const handleClick = e => {
        setData(prevState => {
            return {...prevState,
                    [e.target.name]: e.target.value}
        });

    };
    const dataJoined = userData?.date_joined;
    let today = new Date(dataJoined)
let date = today.getDate() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getFullYear()
console.log(date)
  return (<>
    <UserProfileStyled>

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
      <span>{userData?.reviews?.length} reviews</span>
      <span>Comments</span>
    {/*  Conditional Rendering */}
       {data.type === 'reviews' ?
                        <Sara>
                               <p>REVIEWS</p>
                            <div>
                                <span>Läderach Chocolatier Suisse</span>
                                <p>This location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. The people there seem to be quite good and helpful in their service. </p>
                            </div>
                            <div>
                                <span>Läderach Chocolatier Suisse</span>
                                <p>This location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. The people there seem to be quite good and helpful in their service. </p>
                            </div>



                        </Sara> : null }
        {data.type === 'comments' ? <Sara> <p>COMMENTS</p>
                            <div>
                                <span>Review 1</span>
                                <p>This is horrible!</p>
                            </div>
                            <div>
                                <span>Review 2</span>
                                <p>That's a good idea! </p>
                            </div></Sara> : null }
        {data.type === 'restaurants' ? <Sara><p>RESTAURANTS</p>
         <div>
                                <span>Laurentio Gelato Store</span>
                                <p>Lorem ipsum dolor sit amet, et legere populo quodsi sea. Nec quodsi albucius eu, simul soleat accusata te sea. Vix maluisset sententiae et, eam an salutatus consectetuer, ludus partiendo te ius. Vivendum convenire pro in. Cum impedit honestatis eu.</p>
                            </div>
                            <button type="button" id="signup" onClick={() => navigate("/restaurants")}>Create Restaurant</button>
                        </Sara> : null }
        {data.type === 'edit' ? <Sara>
            Edit Profile</Sara> : null }
    </Nina>
    <AboutProfile>
        <span>About {userData?.username}</span>
      <label>Location</label>
        <p>{userData?.location}</p>
       <label>Luna member since</label>
        <p>{date}</p>
        <label>Things I love</label>
        <p>{userData?.things_I_love}</p>
        <label>Description</label>
        <p>{userData?.description}</p>
    </AboutProfile>

      </UserProfileStyled>
  </>)
}

export default  UserProfile