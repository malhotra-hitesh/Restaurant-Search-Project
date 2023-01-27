import styled from 'styled-components';

export const UserDetailsStyle = styled.section`
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
    flex-direction: row;

    .user-profile-image {
      width: 80px;
      height: 80px;
      background-position: center;
      background-size: cover;
    }

    .name-detail {
      display: flex;
      flex-direction: column;
      padding: 7px;

      .username {
        color: orange;
        font-size: 20px;
      }
    }


    .middle-section {
      display: flex;
      flex-direction: column;
      padding: 10px;


      .description-text {
        font-size: 12px;

      }
    }

      .last-section {
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