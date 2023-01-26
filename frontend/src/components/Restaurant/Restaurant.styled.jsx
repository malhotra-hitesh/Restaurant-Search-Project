import styled from "styled-components";

export const StyledRestaurant = styled.div`
    display: flex;
    flex-direction: column;
    //font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    color: #4C4C4C;
    border-top: #E47D31 solid 8px;
    background: #FFF;

  
  .stars-container {
    display: flex;
    flex-direction: row;
  }

  .num-reviews {
    margin-left: auto;
    padding-right: 10px; 
    
    .restaurant-pic {
        margin-right: 20vw;
    }
    
`;