import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import LogoLeft from "../../components/LogoLeft/LogoLeft";
import { CongratulationsPage, CongratulationsRight,ConfirmationContainer } from './Congratulations.styled';
// import GroupPng from "../../assets/images/Group.png"



const Congratulations = () => {
    const navigate = useNavigate();
    const email = useSelector((state) => state.auth.email );
    console.log(email);

    return (
        <>
        <CongratulationsPage>
         {/*<LogoLeft/>*/}
          <CongratulationsRight>
            <ConfirmationContainer>
            <h1>Congratulations!</h1>

            {/*<img src = {GroupPng} />*/}

            <p>We've have sent a confirmation code to your email {email}</p>
            </ConfirmationContainer>
            <button onClick={() => navigate("../Verification")}>CONTINUE</button>
         </CongratulationsRight>
        </CongratulationsPage>
        </>
    )
}

export default Congratulations