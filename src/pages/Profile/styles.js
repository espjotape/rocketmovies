import styled from "styled-components"

import { Link } from "react-router-dom"

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

    > button {
      border: none;
      background: none;
      gap: 6px;
      font-size: 16px;
      display: flex;
      align-items: center;

      p {
        color: ${({ theme }) => theme.COLORS.PINK}
      }

       svg {
        height: 15px;
        width: 15px;

        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }

`

export const Return = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 30px;

  p {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 15px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 15px;
  };
`

export const Form = styled.form`
  margin: 20px auto 0;
  max-width: 340px;

  div:nth-child(4){
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
    object-fit: cover;
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
    cursor: pointer;

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