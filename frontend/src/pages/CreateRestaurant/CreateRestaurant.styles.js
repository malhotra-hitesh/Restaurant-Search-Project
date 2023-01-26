import styled from "styled-components";

export const Page = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
height: 98vh;
width: 100vw;

`;

export const CreateRestaurant = styled.div`
display: flex; 
flex-direction: column;
flex-grow: 1;
align-items: center;
background-color: #F2F2F2;
overflow-y: auto;

h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #4c4c4c;
    margin-top: 50px;
    
  }



>p {
    font-size: xx-large;
    font-weight: 600;
    margin: 0;
    border-bottom: 5px solid orange;
    padding: 2% 10px 10px;
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
    cursor: pointer;
    position: relative;
    top: 30px;
    left:120px;
}



  form {
    position: relative;
    top: 20px;
  }

`;

export const Line = styled.div`
display: flex;
flex-direction: column;

p {
    font-weight: 600;
    margin: 0;
    margin-top: 15px;
}

`;

export const Fields = styled.div`
display: flex;
justify-content: space-between;
gap: 15px;

`;

export const FormField = styled.div`
width: 31%;
display: flex;
flex-direction: column;

label {
        font-weight: 600;
        color: gray;
        padding: 15px 0px;
}

>input {
        height: 100%;
        flex-grow: 1;
        border-radius: 2px;
        border: 1px solid lightgray;
        padding: 15px;
}

button {
    width: 200px;
    height: 40px;
    background:#E47D31;
    border-radius: 28px;
    font-size: 12px;
    color: white;
    border: none;
    cursor: pointer;
    position: relative;
    right: 50px;
    left: 50px;
    bottom: 50px;
   

}

`;


