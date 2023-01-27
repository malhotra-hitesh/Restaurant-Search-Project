import styled from 'styled-components'

export const UserProfileStyled = styled.div`

    display: flex;
    background: #F2F2F2;
  //background-image: '../../assets/background.png';  
    margin-top: 25px;
    padding-bottom: 115px;
    justify-content: space-around;
      span {
        img {
          width: 100px;
          height: 100px;
        }
    }
`

export const Nina = styled.div`
display: grid;
  button {
    border: none;
    border-bottom:1px solid #EBEBEB ;
    background: #FFFFFF;
    img {
      padding-right: 10px;
      width: 35px;
      height: 35px;
    }
  }
  button:focus {
    background: rgba(0, 0, 0, 0.0837013);
  }
 
`

export const AboutProfile = styled.div`
display: grid;
  max-width: 250px;
  max-height: 350px;
  padding-top: 75px;
  
  span {
    font-size: 20px;
    font-family: Roboto;
    font-weight: 700;
    line-height: 23.4px;
    padding-bottom: 15px;
  }
  label {
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: #000000;
  }
  
  p {
    font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 23px;
color: #000000;
    padding-bottom: 25px;
  }
`
export const Sara = styled.div`
  background: #FFFFFF;
  width: 619px;
  height: 380px;
  padding-top: 15px;
  border: 1px solid #EBEBEB;
  div {
     margin-top: 35px;
    border-bottom:1px solid #EBEBEB ;
    
     p {
       padding-top: 15px;
       font-family: Roboto;
        font-weight:300 ;
       font-size: 16px;
       color: #303030;
     }
    span {
      font-size: 20px;
      font-weight: 400;
      font-family: Roboto;
      color: #4C4C4C;
    }
  }
  p {
    font-family: Roboto;
    font-weight: 700;
    font-size: 20px;
    color: #303030;
  }
  span {
   
  
  }
  button {
    width: 200px;
    height:57px;
    background:#E47D31;
    border-radius: 28px;
    font-size: 20px;
    font-family: Roboto;
    font-style: normal;
    color: white;
    border: none;
    cursor: pointer;
    position: relative;
    top: 40px;
    left:190px;
    font-weight:400;
}
`

;

export const NotAuthorized = styled.div`
display: flex;
  width:100%;
  height: 580px;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
  font-family: Roboto;
  align-items: center;
`;



