import React, {useEffect, useState} from 'react';
import Restaurant from "../../components/Restaurant/Restaurant.jsx";
import {SearchGlobaltyle, StyledButtons, StyledRestaurants} from "./Search.styled";
import axios from "axios";
import {useSearchParams} from "react-router-dom";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [formData, setFormData] = useState({
        search: searchParams.get("search"),
        category: "",
        type: 'restaurants'
    });
    const [newWarning, setNewWarning] = useState('');
    const [searchedData, setSearchedRestaurants] = useState([])
    // console.log(formData)

    const handleGetSearch = async() => {
        try {
            setSearchedRestaurants([]);
            const res = await axios.get("https://luna-group2.propulsion-learn.ch/backend/api/search/", {params: formData});
            setSearchedRestaurants(res.data);
            // console.log("restaurants =", restaurants);
        }
        catch(e) {
            setNewWarning(e.message);
            }
    }

    useEffect(()=>{
        handleGetSearch()
        },[formData])

    const handleClick = e => {
        setFormData(prevState => {
            return {...prevState,
                    [e.target.name]: e.target.value}
        })
        handleGetSearch();
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

            {formData.type === 'restaurants' ?
                        <StyledRestaurants>
                            {searchedData.length===0 ?  null : searchedData.map((restaurant) => {
                                return (
                                    <Restaurant key={restaurant.id} restaurant={restaurant}/>
                                    )
                                })
                            }
                        </StyledRestaurants> : null }
            {formData.type === 'reviews' ? <div>Reviews </div> : null }
            {formData.type === 'users' ? <div>Users </div> : null }

    </SearchGlobaltyle>
    )
}

export default Search