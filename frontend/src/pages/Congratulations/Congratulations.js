import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CongratulationsPage,ConfirmationContainer } from './Congratulations.styled';

const Congratulations = () => {
    const navigate = useNavigate()
    useEffect(() => {
    setTimeout(() => {
      navigate('/verification');
    }, 30000);
  }, []);

    return (
        <>
        <CongratulationsPage>
            <ConfirmationContainer>
            <h2>REGISTRATION</h2>
                <hr></hr>
            <p>Thanks for your registration.
Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon. Since monkeys arent good in writing the message could end up in you junk folder. Our apologies for any inconvienience.thank for </p>
            </ConfirmationContainer>
        </CongratulationsPage>
        </>
    )
}

export default Congratulations