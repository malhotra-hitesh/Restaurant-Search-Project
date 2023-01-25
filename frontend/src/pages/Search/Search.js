import React, {useEffect, useState} from 'react';
import Restaurant from "../../components/Restaurant/Restaurant.jsx";
import {SearchGlobaltyle, StyledButtons, StyledRestaurants} from "./Search.styled";

const Search = () => {
    const [formData, setFormData] = useState({
        search: "",
        category: "",
        type: ''
    });
    console.log(formData)

    const handleClick = e => {
        setFormData(prevState => {
            return {...prevState,
                    [e.target.name]: e.target.value}
        })
    };

        const handleChange = e => {
        setFormData(prevState => {
            return {...prevState,
                    [e.target.name]: e.target.value}
        })
    };

    const categories = [
      {
        label: "Fast food",
        value: "1",
      },
      {
        label: "Casual dining",
        value: "2",
      },
      {
        label: "Fast casual",
        value: "3",
      },
      {
        label: "Contemporary",
        value: "4",
      },
      {
        label: "Café",
        value: "5",
      },
      {
        label: "Pizzeria",
        value: "6",
      },
    ];
    const restaurants = [
        {
            id: 1,
            name: "El Racó de l'Havana",
            street: 'Carrer del Prat, 260',
            zip: '08301',
            city: 'Mataró',
            image: '',
            rating_average: 3.4,
            reviews: [1,2,3,4]
        },
        {
            id: 2,
            name: "El Racó de l'Havana",
            street: 'Carrer del Prat, 260',
            zip: '08301',
            city: 'Mataró',
            image: '',
            rating_average: 3.4,
            reviews: [1,2,3,4]
        },
        {
            id: 1,
            name: "El Racó de l'Havana",
            street: 'Carrer del Prat, 260',
            zip: '08301',
            city: 'Mataró',
            image: '',
            rating_average: 3.4,
            reviews: [1,2,3,4]
        },
        {
            id: 2,
            name: "El Racó de l'Havana",
            street: 'Carrer del Prat, 260',
            zip: '08301',
            city: 'Mataró',
            image: '',
            rating_average: 3.4,
            reviews: [1,2,3,4]
        },
        {
            id: 1,
            name: "El Racó de l'Havana",
            street: 'Carrer del Prat, 260',
            zip: '08301',
            city: 'Mataró',
            image: '',
            rating_average: 3.4,
            reviews: [1,2,3,4]
        },
        {
            id: 2,
            name: "El Racó de l'Havana",
            street: 'Carrer del Prat, 260',
            zip: '08301',
            city: 'Mataró',
            image: '',
            rating_average: 3.4,
            reviews: [1,2,3,4]
        },
    ]

    return (
        <SearchGlobaltyle>
            <form>
                <input
                    type={"text"}
                    value={formData.search}
                    onChange={handleChange}
                    placeholder={"Search"}
                    name={"search"}/>
                <select onChange={handleChange}
                        name={'category'}>
                    <option value="" selected>Select a category...</option>
                    {categories.map((category) => (
                      <option value={category.value}>{category.label}</option>
                    ))}
                  </select>
            </form>
            <StyledButtons>
                <button type="button"
                        value="restaurants"
                        name='type'
                        onClick={handleClick}> RESTAURANTS </button>
                <button type="button"
                        value="reviews"
                        name='type'
                        onClick={handleClick}> REVIEWS </button>
                <button type="button"
                        value="users"
                        name='type'
                        onClick={handleClick}> USERS </button>
            </StyledButtons>


            <StyledRestaurants>
                {restaurants.map((restaurant) => {
                    return (
                        <Restaurant key={restaurant.id} restaurant={restaurant}/>
                    )
                })
                }
            </StyledRestaurants>
    </SearchGlobaltyle>
    )
}

export default Search