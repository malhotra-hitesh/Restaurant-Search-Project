import styled from "styled-components";


export const FooterUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  width: 100%;
  height: 56px;

`;


export const Navbar = styled.div`
 
 ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    position: relative;
    left: 50px;
    
   }



  a {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-decoration: none;
    color: #646363;

  }
  a:hover {
    cursor: pointer;
}
`;


export const SocialMedia = styled.div`
display: flex;


img {
    padding: 5px;
    width: 40px;
    height: 40px;
}

img:hover {
    cursor: pointer;
}

`;

export const MainFooter = styled.div`
  flex-direction: column;  
  height: 90px;
  display: flex;


  p {
    position: relative;
    top: 6px;
    left: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #646363;
  }
`;
