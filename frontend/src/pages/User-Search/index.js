import React, {useEffect, useState} from 'react';
import {SearchGlobalstyle, StyledButtons, StyledUsers} from "./user-search.styles";
import axios from "axios";
import UserProfilesDetails from "../../components/Users-Details/Users.js";
import users from "../../components/Users-Details/Users.js";
import {findAllByDisplayValue} from "@testing-library/react";


const UserSearch = () => {
    const [formData, setFormData] = useState({
        search: "",
        category: "",
        type: 'users'
    });
    const [newWarning, setNewWarning] = useState('');
    const [searchedData, setSearchedUsers] = useState([])
     console.log(formData)

    const handleGetSearch = async () => {
        try {
            setSearchedUsers([]);
            const res = await axios.get("https://luna-group2.propulsion-learn.ch/backend/api/users/", {params: formData});
            setSearchedUsers(res.data);
        } catch (e) {
            setNewWarning(e.message);
        }
    }

    useEffect(() => {
        handleGetSearch()
    }, [formData])

    const handleClick = e => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })

    };

    const handleChange = e => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })

         //handleGetSearch();
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
        <SearchGlobalstyle>
            <StyledButtons>
                <button type="button"
                        value="restaurants"
                        name='type'
                        onClick={handleClick}> RESTAURANTS
                </button>
                <button type="button"
                        value="reviews"
                        name='type'
                        onClick={handleClick}> REVIEWS
                </button>
                <button type="button"
                        value="users"
                        name='type'
                        onClick={handleClick}> USERS
                </button>
            </StyledButtons>

            {formData.type === 'restaurants' ? <div>Restaurants </div> : null}
            {formData.type === 'reviews' ? <div>Reviews </div> : null}
            {formData.type === 'users' ?
                <StyledUsers>

                    {searchedData.length === 0 ? null : searchedData.map((users) =>     {
                        return (
                            <UserProfilesDetails key={users.id} Users={users.description}/>

                        )
                    })
                    }<div>Users</div>
                </StyledUsers> : null}



        </SearchGlobalstyle>
    )
}

export default UserSearch