import styled from "styled-components";

export const ReviewCard = styled.div`
    /* width: 55%; */
    border: 1px solid #EBEBEB;
    background-color: #FFFFFF;
    border-top: 5px solid $orange;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-top: #E47D31 solid 8px;
    width: 271px;
    height: 300px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    color: #4C4C4C;

    
`;

export const UserCard = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #EBEBEB;

    img {
        height: 68px;
        width: 65px;
        /* object-fit: cover; */
        }
    
`;


export const Infos = styled.div`
        height: 100%;
        width: 75%;
        flex-grow: 1;
        display: flex; 
        flex-direction: column;
        justify-content: space-around;
        padding-left: 5px;
        
        h2 {
            
            color: #E47D31;
            font-weight: 600;
            font-size: large;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
        }
        
        p {

            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            color: #4C4C4C;
        }
`;

export const Revieww= styled.div`
   padding: 10px 10px 0px;
`;

export const RestaurantName= styled.div`
            margin-bottom: 20px;
            color: #E47D31;
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;
`;

export const LikeComment= styled.div`
            display: flex;
            align-items: center;
            height: 30px;
            width: 100%;
            background-color: rgba(145, 145, 145, 0.6);
            border-radius: 50px;
            margin-top: 20 px;

            >button {
                width: 50%;
                height: 100%;
                background-color:transparent;
                border: none;
                color: #FFFFFF;
                cursor: pointer;
                font-weight: 300;
                font-size: 16px;
                line-height: 19px;
            }
            >button:first-of-type {
                border-right: 1px solid white;
            }
`;

export const Content= styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 60px;
    margin-top: 40px;

            
`;


    
















