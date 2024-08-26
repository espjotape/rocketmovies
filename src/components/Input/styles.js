import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  margin-bottom: 9px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 10px;

  > input {
    width: 100%;

    padding: 19px;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 16px;
  }
`