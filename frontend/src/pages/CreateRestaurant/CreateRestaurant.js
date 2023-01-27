
import { Page, CreateRestaurant, Fields, FormField, Line, } from "./CreateRestaurant.styles";
import axios from 'axios';
import React, { useState } from "react"
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";

const CreateRestaurantPage = () => {
    const navigate = useNavigate();
    const access= localStorage.getItem("access");
    const [errorMessage, setErrorMessage] = useState("");


    const config = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${access}`,
        },
    }

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
        price: '',
        image: ''
    });

    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log("formData =", formData)
    }

    const handleUploadImage = e => {
      setFormData(prevValue => {
        return {
          ...prevValue,
          [e.target.name]: e.target.files[0],
        };
      });
      console.log("formData", formData)

    }

    const handleSubmit = e => {
      e.preventDefault();

      /* Data has to be sent as a FromData, so here we create the FormData */
      const form = new FormData();

      /* insert in formData all data of the post except images */
      for (const key in formData) {
        form.append(key, formData[key]);
      };

      // /* we treat images differently because FormData doesn't accept arrays.
      // We have to append images one by one */
      // for (let i = 0 ; i < uploadedImages.length ; i++) {
      //   formData.append("images", uploadedImages[i]);
      // }

      console.log("form =", Object.fromEntries(form))

      /*postNewPost is dispatched only if there is content in the formData */
      if (form.has("name") && form.get("name").length>0) {
        setErrorMessage("");

        axios.post("https://luna-group2.propulsion-learn.ch/backend/api/restaurants/new/", form, config)
            .then(response => {
                console.log(response);
                /* if post request is successful, user is redirected to home */
                if (response.status === 201) navigate("/");
            })
            .catch(error => {
                console.log(error);
            });


      }
      else {
        /* If formData has no content, errorMessage is stored (and later rendered) */
        setErrorMessage("This field may not be blank.");
        return null
      }
      console.log("form =", Object.fromEntries(form))
    }

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

    const prices = [
      {
        label: "$",
        value: "1",
      },
      {
        label: "$$",
        value: "2",
      },
      {
        label: "$$$",
        value: "3",
      }
    ];
    

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
                                <label htmlFor=''>Category *</label>
                                <select onChange={handleChange}
                                        name={'category'}>
                                    <option value="" className={'select-option'} selected>Select a value...</option>
                                    {categories.map((category) => (
                                      <option value={category.value}>{category.label}</option>
                                    ))}
                                  </select>
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
                                {/*<input id='' name='price' value={formData.price} onChange={handleChange}/>*/}
                                <select onChange={handleChange}
                                        name={'price'}>
                                    <option value="" className={'select-option'} selected>Select a value...</option>
                                    {prices.map((price) => (
                                      <option value={price.value}>{price.label}</option>
                                    ))}
                                  </select>
                            </FormField>
                            <FormField>
                                <label for=''>Image</label>
                                <label className={'image-input'} htmlFor="upload-image">CHOOSE A FILE...</label>
                                <input type="file"
                                        name="image"
                                        id="upload-image"
                                       style={{display:"none"}}
                                        onChange={handleUploadImage}
                                      />
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

