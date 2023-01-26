import {useEffect, useState} from "react";
import homeHeader from "../../assets/home-header.png"
import {Best_Rated_restaurants, HomeHeader, Main_container, Product_Container} from "./HomePage.styles";
import {Restaurant_cart} from "../../components/Product/product.styles";
import Product from "../../components/Product";
import axios from "axios"

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
            <Product_Container>
                <Restaurant_cart>
                    <div className="cart">{

                        /*restaurant component will go here*/
                       restaurants.map(restaurant => (
                               <Product
                                    key={restaurant.id}
                                    name={restaurant.name}
                               />
                            )
                        )
                    }
                    </div>
                    </Restaurant_cart>
                </Product_Container>
        </Main_container>
    );
};


export default HomePage;