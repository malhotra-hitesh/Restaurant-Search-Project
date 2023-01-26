import styled from "styled-components";

export const SearchGlobaltyle = styled.div`
    background: #F2F2F2;
`;

export const StyledButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;

  
  button {
    border: none;
    border-bottom: transparent solid 2px;
    background-color: transparent;
    padding: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
  }
  button:focus {
    border-bottom: #E47D31 solid 2px;
  }
`;

export const StyledRestaurants = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 10px;
    background: #F2F2F2;
    padding: 10px 50px 10px;
`;

