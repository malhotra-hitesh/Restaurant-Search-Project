import styled from 'styled-components';

export const UserDetailsStyle=styled.section`
  
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  border: 1px solid lightgray;
  border-top: 6px solid darkorange;
  background-color: white;
  width: 270px;
  margin-bottom: 10px;

  .top-section {
    display: flex;
    line-height: 1.6em;
      
    .user-profile-image {
      width: 80px;
      height: 80px;
      background-position: center;
      background-size: cover;
    }
    

  .middle-section {
    display: flex;
    flex-direction: column;
    padding: 10px;


    .description-text {
      font-size: 12px;

    }

    span {
      color: orange;
      margin-left: 5px;
    }

  }


`;