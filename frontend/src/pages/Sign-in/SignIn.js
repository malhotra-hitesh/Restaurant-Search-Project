import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { setAuth } from '../../features/slice/authSlice';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SignInPage, SignInForm } from "./SignIn.styled"


const SignIn = () => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newWarning, setNewWarning] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth.data);

  const handleChange = e => {
    if(e.target.name === "email") {
      setNewEmail(e.target.value);
    } else {
      setNewPassword(e.target.value);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      email: newEmail,
      password: newPassword,
    };
    axios.post("https://motion.propulsion-home.ch/backend/api/auth/token/", data).then(res => {
      setNewWarning("");
      const authData = {
        email: newEmail,
        access: res.data.access,
        username: res.data.user.username,
        first_name: res.data.user.first_name,
        last_name: res.data.user.last_name,
      }
      localStorage.setItem('access', authData.access);
      localStorage.setItem('username', authData.username);
      localStorage.setItem('email', authData.email);
      localStorage.setItem('first_name', authData.first_name);
      localStorage.setItem('last_name', authData.last_name);
      dispatch(setAuth(authData));
    }).catch(error => {
      setNewWarning(error.message);
    });
  }

  useEffect(() => {
    if(auth) {
      navigate("/restaurant");
      return;
    }
    const authData = {
      email: localStorage.getItem('email'),
      access: localStorage.getItem('access'),
      username: localStorage.getItem('username'),
      first_name: localStorage.getItem('first_name'),
      last_name: localStorage.getItem('last_name'),
    };
    if(authData.access) {
      dispatch(setAuth(authData));
    }
  });

  return (
    <>
    <SignInPage>
      <SignInForm>
      <h2>Login</h2>
        <hr></hr>
      <p>{newWarning}</p>
      {!auth && <form onSubmit={handleSubmit}>
        <span>
       <input name="email" type="email" placeholder="Email" value={newEmail} onChange={handleChange}/>
        </span>
        <span>
        <input name="password" type="password" placeholder="Password" value={newPassword} onChange={handleChange}/>
        </span>
        <button type="submit">Login</button>

      </form>}
      </SignInForm>
    </SignInPage>
    </>
  );
}

export default SignIn