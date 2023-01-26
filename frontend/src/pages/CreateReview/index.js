import React, {useState} from "react";
import star_full from "../../assets/star_full.png";
import star_empty from "../../assets/star_empty.png";
import {ReviewHeader} from "./Review.styles";
import axios from "axios";
import reviewpageimage from '../../assets/reviewpageimage.png'
import {useSelector} from "react-redux";

const CreateReviewPage=()=>{

    const [content,setContent] =useState("")
    const auth = useSelector((state) => state.auth.data);
    const addReview = async() =>{
        const config = {
        method: "POST",
        headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    };

        let formField= new FormData()
        formField.append('content',content)

        await axios({
          method:'POST',
          url:'https://luna-group2.propulsion-learn.ch/backend/api/reviews/',
          data:formField,
          config
      }) .then(response=>{
          console.log(response.data);

      })
    }

    return (
<>
    <ReviewHeader>
        <div className="main-image">
            <img src={reviewpageimage}  alt="main-image"/>
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
                    <input className="input-field"
                           placeholder="Your review helps others learn about great local businesses."
                            name="content"
                            value={content}
                           onChange={(e)=>setContent(e.target.value)}
                    />
                </section>
                <section>
                    <p className="field-required">This field is required</p>
                    <button className="Submit-button" type="submit" onClick={addReview}>Submit</button>
                </section>

            </div>

</ReviewHeader>
    </>
    )
}
export default CreateReviewPage