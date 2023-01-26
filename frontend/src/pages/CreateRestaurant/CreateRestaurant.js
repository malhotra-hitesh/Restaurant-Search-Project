
import { Page, CreateRestaurant, Fields, FormField, Line, } from "./CreateRestaurant.styles";
import axios from 'axios';
import React, { useState } from "react"
import { useSelector } from "react-redux";

const CreateRestaurantPage = () => {
    const auth = useSelector((state) => state);
    console.log(auth);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc1MTcwNzI4LCJpYXQiOjE2NzQ3Mzg3MjgsImp0aSI6ImNmNGUyNmFkMzk1OTRmODY4NzA2NjZkMmMwYjNlZWM5IiwidXNlcl9pZCI6OX0.77LwspYW0Lf9G51dO2-kYBsR2LfWYJFHipIsoWxm1Fc'

    const [formData, setFormData] = useState({
        name: '',
        category: '',
        country: '',
        street: '',
        city: '',
        zip: '',
        website: '',
        phone: '',
        email: '',
        opening_hours: '',
        price_level: ''
    });

    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    const config ={
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios.post("https://luna-group2.propulsion-learn.ch/backend/api/restaurants/new/", formData, config)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }


    

    return (
        <Page>
            
            <CreateRestaurant>
                <h2>CREATE NEW RESTAURANT</h2>
                <form onSubmit={handleSubmit}>
                    <Line>
                        <p>Basic</p>
                        <Fields>
                            <FormField>
                                <label for=''>Name *</label>
                                <input id='' name='name' value={formData.name} onChange={handleChange} required/>
                            </FormField>
                            <FormField>
                                <label for=''>Category *</label>
                                <input id='' name='category' value={formData.category} onChange={handleChange} required />
                            </FormField>
                            <FormField>
                                <label for=''>Country *</label>
                                <input id='' name='country' value={formData.country} onChange={handleChange} required/>
                            </FormField>
                        </Fields>
                    </Line>
                    <Line>
                        <p>Address</p>
                        <Fields>
                            <FormField>
                                <label for=''>Street *</label>
                                <input id='' name='street' value={formData.street} onChange={handleChange} required/>
                            </FormField>
                            <FormField>
                                <label for=''>City *</label>
                                <input id='' name='city' value={formData.city} onChange={handleChange} required/>
                            </FormField>
                            <FormField>
                                <label for=''>Zip</label>
                                <input id='' name='zip' value={formData.zip} onChange={handleChange}/>
                            </FormField>
                        </Fields>
                    </Line>
                    <Line>
                        <p>Contact</p>
                        <Fields>
                            <FormField>
                                <label for=''>Website</label>
                                <input id='' name='website' value={formData.website} onChange={handleChange} />
                            </FormField>
                            <FormField>
                                <label for=''>Phone *</label>
                                <input id='' name='phone' value={formData.phone} onChange={handleChange} required/>
                            </FormField>
                            <FormField>
                                <label for=''>Email</label>
                                <input id='' name='email' value={formData.email} onChange={handleChange}/>
                            </FormField>
                        </Fields>

                    </Line>
                    <Line>
                        <p>Details</p>
                        <Fields>
                            <FormField>
                                <label for=''>Opening hours *</label>
                                <input id='' name='opening_hours' value={formData.opening_hours} onChange={handleChange} required/>
                            </FormField>
                            <FormField>
                                <label for=''>Price level</label>
                                <input id='' name='price_level' value={formData.price_level} onChange={handleChange}/>
                            </FormField>
                            <FormField>
                                <label for=''>Image</label>
                                <button type="button">CHOOSE A FILE...</button>
                            </FormField>
                        </Fields>
                    </Line>
                    
                    <button type="submit">Create</button>
                </form>
                {/* <button type="submit">Create</button> */}
            </CreateRestaurant>
            
        </Page>
    )
}

export default CreateRestaurantPage

