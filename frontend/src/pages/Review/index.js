import {useEffect} from "react";

const Review = () => {
    const fetchReviews = async () => {
        const response = await fetch('https://dummyjson.com/products/1');
        const data = await response.json()
        console.log(data)

    }
    useEffect(() => {
        fetchReviews()
    }, []);

    return <div>Reviews</div>;
};
export default Review;