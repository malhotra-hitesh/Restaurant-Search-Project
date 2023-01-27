import React, {useEffect, useState} from "react";
import homeHeader from "../../assets/home-header.png"
import {Best_Rated_restaurants, HomeHeader, Main_container} from "./HomePage.styles";
import axios from "axios"
import Restaurant from "../../components/Restaurant/Restaurant";
import {SearchGlobaltyle, StyledButtons, StyledRestaurants} from "../Search/Search.styled";
import {createSearchParams, useNavigate} from "react-router-dom";

const HomePage = () => {
   const [params, setParams] = useState({
        search: "",
    });
   const navigate = useNavigate();
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

    const handleChange = e => {
        setParams(prevState => {
            return {...prevState,
                    [e.target.name]: e.target.value}
        })
        console.log("params", params)
    };

    const handleSubmit = event => {
        event.preventDefault();
        navigate({
          pathname: '/search/',
          search: `?${createSearchParams(params)}`,
        })
    }

    return (
        <Main_container>
            <HomeHeader>
                <div className="image_container">
                    <img src={homeHeader}/>
                </div>

                <div className="input_container">
                    <div className="input_wrapper">
                        <form onSubmit={handleSubmit}>
                        <input placeholder="Search..." value={params.search} name={'search'} onChange={handleChange}/>
                        <button type="submit" className="custom_button">Search</button>
                        </form>
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