import React, {useState,useEffect} from "react";
import star_full from "../../assets/star_full.png";
import star_empty from "../../assets/star_empty.png";
import {ReviewHeader} from "./Review.styles";
import axios from "axios";
import reviewpageimage from '../../assets/reviewpageimage.png'
import {useSelector} from "react-redux";

const CreateReviewPage = () => {
    const auth = useSelector((state) => state);
    console.log(auth)
    /*const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc1MTcwNzI4LCJpYXQiOjE2NzQ3Mzg3MjgsImp0aSI6ImNmNGUyNmFkMzk1OTRmODY4NzA2NjZkMmMwYjNlZWM5IiwidXNlcl9pZCI6OX0.77LwspYW0Lf9G51dO2-kYBsR2LfWYJFHipIsoWxm1Fc'*/
    const access= localStorage.getItem("access");

    const config = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${access}`,
        },
    }
    const [formData, setFormData] = useState({
        content:""
    });

    const handleChange = e => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit=event=>{
        event.preventDefault();
        axios.post('https://luna-group2.propulsion-learn.ch/backend/api/reviews/new/8/',formData,config)
            .then(response=>{
                console.log(response);
            })
            .catch(error=>{
                console.log(error);
            });
    }

    return (
        <>
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
                        <button className="buttons-stars">
                            <img src={star_empty} alt="empty star for the customers to fill"/>
                        </button>
                        <button className="buttons-stars">
                            <img src={star_empty} alt="empty star for the customers to fill"/>
                        </button>
                        <button className="buttons-stars">
                            <img src={star_empty} alt="empty star for the customers to fill"/>
                        </button>
                        <button className="buttons-stars">
                            <img src={star_empty} alt="empty star for the customers to fill"/>
                        </button>
                        <button className="buttons-stars">
                            <img src={star_empty} alt="empty star for the customers to fill"/>
                        </button>
                        <p className="rating">Select your rating</p>
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

            </ReviewHeader>
        </>
    )
}
export default CreateReviewPage