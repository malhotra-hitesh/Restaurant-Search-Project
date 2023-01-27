import styled from 'styled-components'

export const UserProfileStyled = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  span {
    img {
      width: 100px;
      height: 100px;
    }
  }
`
export const Vjosa = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  width: 100%;

`;

export const Nina = styled.div`
display: grid;
  button {
    border: none;
    border-bottom:1px solid #EBEBEB ;
    background: #FFFFFF;
    img {
      padding-right: 10px;
      width: 35px;
      height: 35px;
    }
  }
  button:focus {
    background: rgba(0, 0, 0, 0.0837013);
  }
`

export const Sara = styled.div`

  width: 450px;
  height: 380px;
  padding-top: 15px;
  border: 1px solid #EBEBEB;
`
