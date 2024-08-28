import styled from "styled-components";
import backgroundImg from "../../assets/something-magical-SdjA-_Xzuxg-unsplash 1.png"


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK}
  }
  > p {
    font-size: 14px;
  }

  > h2 {
    margin: 48px 0;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    gap: 2.5px;
    color: ${({ theme }) => theme.COLORS.PINK}
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`