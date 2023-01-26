import React, {useEffect, useState} from "react";
import homeHeader from "../../assets/home-header.png"
import {Best_Rated_restaurants, HomeHeader, Main_container, Product_Container} from "./HomePage.styles";
import {Restaurant_cart} from "../../components/Product/product.styles";
import axios from "axios"
import Restaurant from "../../components/Restaurant/Restaurant";
import {SearchGlobaltyle, StyledButtons, StyledRestaurants} from "../Search/Search.styled";

const HomePage = () => {

    const [restaurants, setRestaurants] = useState([])
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://luna-group2.propulsion-learn.ch/backend/api/home/')

            setRestaurants(response.data)
            console.log(response.data,'from the fetch')
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchProducts();
        console.log(restaurants,'after set name')
    }, []);

    return (
        <Main_container>
            <HomeHeader>
                <div className="image_container">
                    <img src={homeHeader}/>
                </div>

                <div className="input_container">
                    <div className="input_wrapper">
                        <input placeholder="Search..."/>
                        <button className="custom_button">Search</button>
                    </div>
                </div>
            </HomeHeader>

            <Best_Rated_restaurants>
                <div className="best_restaurants_header">
                    <h1>BEST RATED RESTAURANTS</h1>
                    <div id="divider"></div>
                </div>
             </Best_Rated_restaurants>
            <StyledRestaurants>
                {restaurants.map(restaurant => (
                           <Restaurant
                                id={restaurant.id}
                                restaurant={restaurant}
                           />
                        )
                    )
                }
                </StyledRestaurants>
        </Main_container>
    );
};


export default HomePage;