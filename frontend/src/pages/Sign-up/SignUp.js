import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { setEmail } from '../../features/slice/authSlice';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SignUpPage,SignUpRight, SignUpNav, SignUpForm } from "./SignUp.styled";

const SignUp = () => {
  const [newEmail, setNewEmail] = useState('');
  const [newWarning, setNewWarning] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.data);
  const navigate = useNavigate();

  const handleChange = e => {
    if (e.target.name === "email") {
      setNewEmail(e.target.value);
    }
  }

  const handleRegistration = e => {
    e.preventDefault();

    const data = {
      email: newEmail,
    };
    axios.post("https://motion.propulsion-home.ch/backend/api/auth/registration/", data).then(res => {
      console.log(res);
      dispatch(setEmail(newEmail));
      navigate("/Congratulations");
    }).catch(error => {
      console.log(error);
      setNewWarning(error.message);
    });
  }

  useEffect(() => {
    if (auth) {
      navigate("/Feed");
    }
  });

  return (
    <>
    <SignUpPage>
      <SignUpForm>
      <h2>REGISTRATION</h2>
        <hr></hr>
      <p>{newWarning}</p>
      <form onSubmit={handleRegistration}>
        <span>
        <input name="email"  type="email" placeholder={'E-mail address'} value={newEmail} onChange={handleChange} />
        </span>
        <button type="submit">Register</button>
      </form>
      </SignUpForm>
    </SignUpPage>

    </>
  )
}

export default SignUp;