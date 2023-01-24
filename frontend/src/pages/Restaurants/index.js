
import {useEffect} from "react";

const Restaurants = () => {
    const fetchRestaurants = async () => {
        const response = await fetch('https://dummyjson.com/products/1');
        const data = await response.json()
        console.log(data)

    }
    useEffect(() => {
        fetchRestaurants()
    }, []);

    return <div>Restaurants</div>;
};
export default Restaurants;