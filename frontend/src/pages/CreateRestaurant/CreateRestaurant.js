import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Page, CreateRestaurant, Fields, FormField, Line } from "./CreateRestaurant.styles";
import axios from 'axios';
import React, { useState, useEffect } from "react"

const CreateRestaurantPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        country: '',
        address: '',
        street: '',
        city: '',
        zip: '',
        contact: '',
        website: '',
        phone: '',
        email: '',
        opening_hours: '',
        price_level: ''
    });

    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.post("https://luna-group2.propulsion-learn.ch/api/restaurants/new/", formData)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }






    return (
        <Page>
            {/* //     <Header /> */}
            <CreateRestaurant>
                <p>CREATE NEW RESTAURANT</p>
                <form>
                    <Line>
                        <p>Basic</p>
                        <Fields>
                            <FormField>
                                <label for=''>Name *</label>
                                <input id='' name='' value='{formData.name}' />
                            </FormField>
                            <FormField>
                                <label for=''>Category *</label>
                                <input id='' name='' value='{formData.category}' />
                            </FormField>
                            <FormField>
                                <label for=''>Country *</label>
                                <input id='' name='' value='{formData.country}' />
                            </FormField>
                        </Fields>
                    </Line>
                    <Line>
                        <p>Address</p>
                        <Fields>
                            <FormField>
                                <label for=''>Street *</label>
                                <input id='' name='' value='{formData.street}' />
                            </FormField>
                            <FormField>
                                <label for=''>City *</label>
                                <input id='' name='' value='{formData.city}' />
                            </FormField>
                            <FormField>
                                <label for=''>Zip</label>
                                <input id='' name='' value='{formData.zip}' />
                            </FormField>
                        </Fields>
                    </Line>
                    <Line>
                        <p>Contact</p>
                        <Fields>
                            <FormField>
                                <label for=''>Website</label>
                                <input id='' name='' value='{formData.website}' />
                            </FormField>
                            <FormField>
                                <label for=''>Phone *</label>
                                <input id='' name='' value='{formData.phone}' />
                            </FormField>
                            <FormField>
                                <label for=''>Email</label>
                                <input id='' name='' value='{formData.email}' />
                            </FormField>
                        </Fields>

                    </Line>
                    <Line>
                        <p>Details</p>
                        <Fields>
                            <FormField>
                                <label for=''>Opening hours *</label>
                                <input id='' name='' value='{formData.opening_hours}' />
                            </FormField>
                            <FormField>
                                <label for=''>Price level</label>
                                <input id='' name='' value='{formData.price_level}' />
                            </FormField>
                            <FormField>
                                <label for=''>Image</label>
                                {/* <StandardButton btnwidth={'70%'} text={'CHOOSE A FILE'}/> */}
                            </FormField>
                        </Fields>
                    </Line>
                </form>
                {/* <StandardButton text={'CREATE'} btnwidth={'10%'} className='SearchButton'/> */}
            </CreateRestaurant>
            {/* //     <Footer /> */}
        </Page>
    )
}

export default CreateRestaurantPage

