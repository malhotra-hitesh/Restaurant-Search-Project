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

>p {
    font-size: xx-large;
    font-weight: 600;
    margin: 0;
    border-bottom: 5px solid #E47D31;;
    padding: 2% 10px 10px;
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

`;

