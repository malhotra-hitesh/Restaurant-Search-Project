import styled from "styled-components";

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  Width: 1440px;
  Height: 71px;
  padding-inline: 2rem;
  background-color: green;
  position: relative;
  padding: 0 2.5rem;
  

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: #000000;
    // position: absolute;
    // left: 2.08%;
    // right: 87.92%;
    // top: 18.57%;
    // bottom: 22.27%;
    display: flex;
  }
  
`;

export const Navbar = styled.nav`


  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    border: 1px solid black;
    position: relative;
    right: 370px;
    
   
    
    
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

//   a:first-child {
//     border: 2px solid orange;
//     position: absolute;
//     height: 23px;
//     left: 23%;
//     right: 23%;
//     top: calc(50% - 23px/2 - 0.67px);
// }

//   a:last-child {
//     position: absolute;
//     height: 23px;
//     left: 19%;
//     right: 23%;
//     top: calc(50% - 23px/2 - 0.67px);   
// }


`;
