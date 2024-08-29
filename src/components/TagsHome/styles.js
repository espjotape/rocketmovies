import styled from "styled-components";

export const Container = styled.span`
  padding: 8px 16px;
  margin-right: 8px;

  font-size: 12px;
  font-family: "Roboto", sans-serif;
  font-style: normal;

  background-color: ${({ theme }) => theme.COLORS.RAISIN_BLACK};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;

`