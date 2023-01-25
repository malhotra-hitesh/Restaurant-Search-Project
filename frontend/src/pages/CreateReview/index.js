import React, {useState,useEffect} from "react";

import star_full from "../../assets/star_full.png";
import star_empty from "../../assets/star_empty.png";
import {ReviewHeader} from "./Review.styles";

const CreateReviewPage=()=>{

    return (
<>
    <ReviewHeader>
        <div className="main-image">
        </div>
        <div className="Main-text">
            <h2>Läderach Chocolatier Suisse</h2>
            <h2>Chocolatiers & Shops</h2>
    <div>
        <div>
            <img src={star_full} alt="star for the restaurant"/>
            <img src={star_full} alt="star for the restaurant"/>
            <img src={star_full} alt="star for the restaurant"/>
            <img src={star_full} alt="star for the restaurant"/>
            <img src={star_empty} alt="star for the restaurant"/>
            <p>68 reviews</p>
        </div>
    </div>
        </div>

        <div>
                <section className="top-field">
                    <button  className="buttons-stars">
                        <img src={star_empty} alt="empty star for the customers to fill"/>
                    </button>
                    <button className="buttons-stars">
                        <img src={star_empty} alt="empty star for the customers to fill"/>
                    </button>
                    <button className="buttons-stars">
                        <img src={star_empty} alt="empty star for the customers to fill"/>
                    </button>
                    <button className="buttons-stars" >
                        <img src={star_empty} alt="empty star for the customers to fill"/>
                    </button>
                    <button className="buttons-stars">
                        <img src={star_empty} alt="empty star for the customers to fill"/>
                    </button>
                    <p className="rating">Select your rating</p>
                </section>
                <section className="input-field-container">
                    <input className="input-field" placeholder="Your review helps others learn about great local businesses.
                            Please don't review this business if you received a freebie for writing this review,
                            or if you're connected in any way to the owner or employees."/>
                </section>
                <section>
                    <p className="field-required">This field is required</p>
                    <button className="Submit-button">Submit</button>
                </section>
            </div>

</ReviewHeader>
    </>
    )
}
export default CreateReviewPage