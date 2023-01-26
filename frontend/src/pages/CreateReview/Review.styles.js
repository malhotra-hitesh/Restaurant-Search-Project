import styled from 'styled-components';

export const ReviewHeader=styled.div`
.main-image{
  
  width: 100%;
  height: 40%;
  display: flex;
  padding: 30px;
  background-repeat: no-repeat;
  background-size: cover;
  
}
  .top-field{
    display: flex;
    min-width: 50%;
    min-height: 10vh; 
    align-items: center;
    justify-content: start;
    padding-top: 20px;
  }
 
.Submit-button{
  background: #E47D31;
    border: none;
    border-radius: 28px;
    min-height: 39px;
    min-width: 130px;
    left: 0px;
    top: 0px;
    font-size: 14px;
    font-style: normal;
    outline: none;
    cursor: pointer;
    margin-left: 51%; 
    color: white;
}  
  .input-field-container{
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    border: 1px solid #E3E3E3;   
    min-width: 50%;
    min-height: 20vh;
    background-color: white;
    padding: 50px 50px; 
  }
  
  .input-field{
    min-width: 350px;
    min-height: 50px;
    border: none;
    outline: none;
  }
  
  .field-required{
    color: #B00000;
  }
  
  .buttons-stars{
    cursor: pointer;
    background-color: inherit;
    outline: none;
    border: none;
    display: flex;
    font-size: 16px;
    text-decoration: none;
    padding: 10px;
  }
  
  
  
`;


