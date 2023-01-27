import React, {useState,useEffect} from "react";
import star_full from "../../assets/star_full.png";
import star_empty from "../../assets/star_empty.png";
import {ReviewHeader} from "./Review.styles";
import axios from "axios";
import reviewpageimage from '../../assets/reviewpageimage.png'
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import FullStar from "../../assets/yellowstar.svg";
import HalfStar from "../../assets/halfstar.png";
import NoStar from "../../assets/nostar.svg";
import {NotAuthorized} from "../UserProfile/UserProfile.styled";

const CreateReviewPage = () => {
    const access = localStorage.getItem("access");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [stars, setStars] = useState([]);

    const countStars = amount => {
        const stars = []

        // compute rating in number of stars
        if (typeof amount === 'number') {
            // console.log("amount stars =", amount)
            const roundedAmount = Math.round(amount*10)/10
            for (let i = roundedAmount; i >= 0; i--) {
                if (i >= 0.75) stars.push(1);
                else if (i >= 0.25) stars.push(0.5)
            }
        }
        if (stars.length < 5) {
            for (let i = stars.length; i<5; i++) {
               stars.push(0)
            }
        }
        return stars;
    }

    useEffect(() =>{
        setStars(countStars(rating));
         if(access) setIsLoggedIn(true);
        else setIsLoggedIn(false)
    }, [access]);

    const handleClick = (e, rating) => {
        // console.log("rating =", rating);
        // console.log("countstars =",countStars(rating));
        setStars(countStars(rating));
        // console.log("stars =", stars)
        setFormData(prevState => {
            return {
                ...prevState,
                rating: rating
            }
        });
        // console.log("formData =", formData)
    }

    const config = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${access}`,
        },
    }
    const [formData, setFormData] = useState({
        content: "",
        rating: 0
    });

    const handleChange = e => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        });
        // console.log("formData =", formData)

    }

    const handleSubmit=event=>{
        event.preventDefault();
        axios.post('https://luna-group2.propulsion-learn.ch/backend/api/reviews/new/8/',formData, config)
            .then(response=>{
                console.log(response);
             /* if post request is successful, user is redirected to home */
            if (response.status === 201) navigate("/");
            })
            .catch(error=>{
                console.log(error);
            });
    }

    return (
        <>
            {isLoggedIn ?
            <ReviewHeader>
                <div className="main-image">
                    <img src={reviewpageimage} alt="main-image"/>
                </div>
                <div className="Main-text">
                    <h2>Läderach Chocolatier Suisse</h2>
                    <h2>Chocolatiers & Shops</h2>
                    <div>
                        <img src={star_full} alt="star for the restaurant"/>
                        <img src={star_full} alt="star for the restaurant"/>
                        <img src={star_full} alt="star for the restaurant"/>
                        <img src={star_empty} alt="star for the restaurant"/>
                        <img src={star_empty} alt="star for the restaurant"/>
                        <p>68 reviews</p>
                    </div>

                </div>

                <div>
                    <section className="top-field">
                        <div className='stars-container'>
                            {stars.map((star, index) => {
                            return(
                                <div>
                                {star === 1 ? <button className={'button-star'}
                                                      name={'rating'}
                                                      value={index+1}
                                                      onClick={e => handleClick(e, index+1)}> <img src={FullStar} />  </button>:
                                                    star === 0.5 ? <button className={'button-star'}
                                                                           name={'rating'}
                                                                           value={index+1}
                                                                           onClick={e => handleClick(e, index+1)}> <img src={HalfStar} /> </button>  :
                                                    <button className={'button-star'}
                                                            name={'rating'}
                                                            value={index+1}
                                                            onClick={e => handleClick(e, index+1)}> <img src={NoStar} /> </button>}
                                </div>
                            )
                        })}
                        <p className="rating">Select your rating</p>
                    </div>
                    </section>
                    <section className={"input-field-container"}>
                        <input className={"input-field"}
                               placeholder={"Your review helps others learn about great local businesses."}
                               name={"content"}
                               value={formData.content}
                               onChange={handleChange}
                        />
                    </section>
                    <section>
                        <button className="Submit-button" type="submit" onClick={handleSubmit}>Submit</button>
                    </section>

                </div>

            </ReviewHeader> : <NotAuthorized>You must login first</NotAuthorized>}
        </>
    )
}
export default CreateReviewPage