import styled from 'styled-components'

export const SignInPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
   justify-content: center;
`

export const SignInForm = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 24px;
    text-align: center;
    color: #4C4C4C;
    text-transform: uppercase;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    line-height: 28px;

  }
   hr {
    background: #E47D31;
    height: 2px;
    width: 100px;
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
    background:#E47D31;
    border-radius: 28px;
    font-size: 20px;
    color: white;
    border: none;
    padding: 15px 25px;
    margin-top: 100px;
    cursor: pointer;

  }

`










