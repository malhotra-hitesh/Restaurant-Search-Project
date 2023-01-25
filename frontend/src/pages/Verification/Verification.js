import React, { useState, useEffect } from "react"
import { useSelector } from 'react-redux';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { VerificationPage, VerificationPart, GapLines } from "./Verification.styled";

const Verification = () => {
    const [newData, setNewData] = useState({
        code: "",
        email: "",
        username: "",
        first_name: "",
        last_name: "",
        password: "",
        password_repeat: "",
    });
    const [newWarning, setNewWarning] = useState('');

    const auth = useSelector((state) => state.auth.data);
    const navigate = useNavigate();

    const handleChange = e => {
        const changed = {};
        changed[e.target.name] = e.target.value;

        setNewData(d => ({
            ...d,
            ...changed,
        }))
    }

    const handleVerification = e => {
        e.preventDefault();

        axios.patch("https://motion.propulsion-home.ch/backend/api/auth/registration/validation/", newData).then(res => {
            console.log(res);
            navigate("/");
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
        <VerificationPage>
          <VerificationPart>
            <h2>VERIFICATION</h2>
              <hr></hr>
            <p>{newWarning}</p>
            <form onSubmit={handleVerification}>
                 <GapLines>
                <input name="email" type="email" placeholder="E-mail address" value={newData.email} onChange={handleChange}></input>
                <input name="code" type="text" placeholder="Validation code" value={newData.code} onChange={handleChange}></input>

                </GapLines>
                <GapLines>
                <input name="username" type="text" placeholder="Username" value={newData.username} onChange={handleChange}></input>
                {/*    this will be changed to location, when we have the right endpoint*/}
                <input name="first_name" type="text" placeholder="Location" value={newData.first_name} onChange={handleChange}></input>
                <input name="last_name" type="text" placeholder="Last name" value={newData.last_name} onChange={handleChange}></input>
                </GapLines>
                <GapLines>
                <input name="password" type="password" placeholder="Password" value={newData.password} onChange={handleChange}></input>
                <input name="password_repeat" type="password" placeholder="Password repeat" value={newData.password_repeat} onChange={handleChange}></input>
                </GapLines>
                <button type="submit">Finish registration</button>

            </form>
            </VerificationPart>

        </VerificationPage>
        </>
    )
}

export default Verification