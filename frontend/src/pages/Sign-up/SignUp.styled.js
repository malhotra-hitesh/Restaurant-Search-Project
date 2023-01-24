import styled from 'styled-components'

export const SignUpPage = styled.div`
width: 100vw;
height: 100vh;
display: flex;
`
// export const SignUpRight = styled.div`
// width: 65%;
// height: 100%;
// display: flex;
// flex-direction: column;
// justify-content: center;
// `


export const SignUpForm = styled.div`
height: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h2 {
  width: 357px;
  text-align: center;
  height: 28px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #4C4C4C;
  font-family: 'Roboto';
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
  width: 200px;
  height:56px;
  background: #E47D31;
  border-radius: 28px;
  font-size: 12px;
  color: white;
  border: none;
  padding: 15px 25px;
  margin-top: 100px;
  cursor: pointer;

}

`