import styled from "styled-components";
export const SearchGlobaltyle = styled.div`
  background-color: #F2F2F2;
  width:1440px;
  height:100%
  
  `
export const SearchBar = styled.div`
  width: 1440px;
  height: 50px;
  display: flex;
border-color: darkgray;
  
  .SearchBar {
    width:100%;
    background: white;
    input {
      width: 100%;
      height: 50px;
      
    }
  }
  `
export const Category = styled.div`
   width:20%;
   height:50px;
  .Category{
    width:20px;
    select{
      height: 50px;
      color: darkgray;
      border-color: darkgray;
    }
    }
    
  
  `

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
`

export const StyledRestaurants = styled.div`
    display: grid;
    
    grid-template-columns: repeat(4, 25vw);
    gap: 10px;
    background: #F2F2F2;
    padding: 10px 50px 10px;
`;

