import React from "react";
import FullStar from "../../assets/yellowstar.svg"
import HalfStar from "../../assets/halfstar.png"
import NoStar from "../../assets/nostar.svg"
import LogoRestaurant from "../../assets/restaurant.svg"
import {StyledRestaurant} from "./Restaurant.styled";

const Restaurant = (props) => {

    const ratingAverage = props.restaurant.rating_average
    const stars = []

    // compute rating in number of stars
    if (typeof props.restaurant.rating_average === 'number') {
        const roundedRatingAverage = Math.round(props.restaurant.rating_average*10)/10
        for (let i = roundedRatingAverage; i >= 0; i--) {
            if (i >= 0.75) stars.push(1);
            else if (i >= 0.25) stars.push(0.5)
        }
    }
    if (stars.length < 5) {
        for (let i = stars.length; i<5; i++) {
           stars.push(0)
        }
    }

  return (
    <>
        <StyledRestaurant>
        <div>{props.restaurant.name}</div>
        <div>{props.restaurant.street}, {props.restaurant.zip} {props.restaurant.city}</div>
        <div className='stars-container'>
                {stars.map(star => {
                return(
                    <div>
                    {star === 1 ? <img width={'20px'} src={FullStar} /> :
                                        star === 0.5 ? <img width={'20px'} src={HalfStar} /> :
                                        <img width={'20px'} src={NoStar} />}
                    </div>
                )
            })}
            <div className='num-reviews'> {props.restaurant.reviews.length}</div>
        </div>
        {props.restaurant.image ? <img className='restaurant-pic' src={props.restaurant.image}/> : <img className='restaurant-pic' src={LogoRestaurant}/>}
        </StyledRestaurant>
    </>
  );
};
export default Restaurant;