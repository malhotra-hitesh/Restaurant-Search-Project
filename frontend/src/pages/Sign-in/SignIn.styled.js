import styled from 'styled-components'

export const SignInRight = styled.div`
width: 65%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`


export const SignInPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`


export const SignInNav = styled.nav`
    height: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;

    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 15px;
        color: #000;
    }

    button {
        margin-right: 20px;
        width: 130px;
        height: 45px;
        border-radius: 50px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        background-color: #fff;
        text-transform: uppercase;
        cursor: pointer;
    }
    `

export const SignInForm = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 4.0625rem; 


  }

  form {
    height: 447px;
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    margin-top: 20px;
    width: 330px;
    padding: 20px 0;
    display: flex;
    align-items: flex-end;
    border: none;
    padding-left: 15px;
  }

  input:focus {
    border: none;
    background-color: #dddddd;
  }

  span {
    width: 350px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }

  img {
    margin-top: 15px;
  }

  button {
    width: 288px;
    height:60px;
    background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
    border-radius: 30px;
    text-transform: uppercase;
    font-size: 12px;
    color: white;
    border: none;
    padding: 15px 25px;
    margin-top: 100px;
    cursor: pointer;

  }

`










