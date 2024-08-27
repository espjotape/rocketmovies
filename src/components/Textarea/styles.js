import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 250px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  border-radius: 10px;
  resize: none;
  margin-bottom: 20px;
  padding: 16px;
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

`