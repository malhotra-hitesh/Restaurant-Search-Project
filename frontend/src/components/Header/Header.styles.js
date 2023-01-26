import styled from "styled-components";

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  Width: 100%;
  Height: 100%;
  padding-inline: 2rem;
  background-color: #FFFFFF;
  position: relative;
  padding: 0 2.5rem;
  

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: #000000;
    display: flex;
  }
  
`;

export const HeaderRight = styled.div`

  display: flex;
  align-items: center;
 
`


export const Navbar = styled.nav`


  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    position: relative;
    right: 50px;
    
   
    }

  a {
    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #4A4A4A;
    
  }

 
  a.active {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #4A4A4A;
    
  }

`;

export const RegNav = styled.div`

  display: flex;
  gap: 2px;

  #signup {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  #login {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  } 

  button {
    display: flex;
    width: 100px;
    height: 40.57px;
    border: none;
    font-size: 16px;
    background-color: #e47d31;
    line-height: 18.75px;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    
  }

  button:hover {
    cursor: pointer;
  }

  
`

