import React from "react";


const ReviewContainer = (props) => {
    return (
        <div className="ReviewCard">
            <div className="UserCard">
                <div className="UserImageclick">
                    <img src={require('...')} />
                </div>
                <div className="Infos">
                    <p className="Usernameclick">{props.first_name} {props.last_name}</p>
                    <p className="clickable">{props.num_of_reviews} reviews in total</p>
                </div>
            </div>
            <div className="Review">
                <p className="RestaurantNameClick">{props.restaurant_name}</p>
                <p>{props.content}</p>
                <div className="LikeComment">
                    <button>Like</button>
                    <div className="Placeholder"></div>
                    <button>Comment</button>
                </div>
            </div>
            <div className="Comments">
                <p className="LatestComments">Latest comments</p>
                <div className="UserPageComment">
                    <div className='dateReviewNumber'>
                        <h2 className='commentcard'>Review {props.reviewNumber}</h2>
                        <p>{props.date}</p>
                    </div>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewContainer;