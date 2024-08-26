import styled from "styled-components"

export const Container = styled.header`
  height: 100vh;
  width: 100%;

  > header {
    width: 100%;
    height: 105px;

    background-color: ${({theme}) => theme.COLORS.ROSE};
    
    display: flex;
    align-items: center;
    padding: 0 120px;

    svg, p{
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 15px;
    }
  }
`

export const Form = styled.form`
  margin: 50px auto 0;
  max-width: 340px;

  div:nth-child(3){
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  width: 186px;
  height: 186px;
  margin: -80px auto 56px;
  
  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  
  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
   
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 3px;
    bottom: 5px;
    
    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }

`