import styled from "styled-components";


export const VerificationPart = styled.div`
width: 100%;
height: 75%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h2 {
    height: 47px;
    font-style: normal;
    font-size: 24px;
    text-align: center;
    color: #4C4C4C;
  font-family: 'Roboto';
font-weight: 700;
line-height: 28px;
text-transform: uppercase;
}

form {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    
}
    hr {
    background: #E47D31;
    height: 2px;
    width: 100px;
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
  background: #E47D31;
  border-radius: 30px;
  font-size: 20px;
  color: white;
  border: none;
  padding: 15px 25px;
  margin-top: 100px;
  cursor: pointer;
    border-radius: 28px;

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
 width: 100%;
 height: 100%;
 display: flex;
`















