import styled from "styled-components";

export const Main_container = styled.div`
background-color: #F2F2F2;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;

`

export const HomeHeader = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image_container {
    width: 100%;
    height: 350px;
  }

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    z-index: 1;
  }

  .input_container {
    z-index: 2;
    width: 100%;
    height: 350px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input_wrapper {
    display: flex;
    gap: 2rem;
  }

  input {
    width: 530px;
    height: 55px;
    background: #ffffff;
    color: #ffffff;
    border-radius: 3px;
    border:white;
    padding: 1rem;
    font-size: 20px;
  }

  button {
    width: 200px;
    height: 58px;
    border-radius: 28px;
    color: #ffffff;
    background-color: #E47D31;
    border: white;
  }
`

export const Best_Rated_restaurants = styled.div`
  width: 100%;
  height: 100%;

  font-size: 10px;
  font-weight: 100;
  top: 39px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration:underline #E47D31 ;

  .best_restaurants_header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
  `
export const Product_Container = styled.div`
  width:1172px;
  height: 410px;
  top: 84px;

    
    .cart{
      width: 217px;
      height: 410px;
      
      border-radius: 3px;

     }
`;