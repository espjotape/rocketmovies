import styled from "styled-components";

export const Container = styled.button`
  height: 48px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  &:disabled{
    opacity: 0.5;
  }
  > h2 {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700}
  }
`