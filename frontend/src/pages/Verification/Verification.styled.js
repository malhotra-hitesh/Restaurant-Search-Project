import styled from "styled-components";


export const VerificationPart = styled.div`
width: 65%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1 {
    height: 47px;
    font-style: normal;
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 4.0625rem; 
    font-family: 'Roboto';
    font-size: 40px;
    line-height: 47px;
}

form {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    
}

input {
    
    border: 1px solid red;
    display: flex;
    align-items: flex-end;
    border: none;
    border-bottom: 1px solid #ddd;
    margin-top: 15px;
    width: 660px;
    padding: 18px 0;
    
    
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

  export const GapLines = styled.div`
    display: flex;
    gap: 30px;

    input {
        width: 317px;
    }

    `
    export const VerificationPage = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
`















