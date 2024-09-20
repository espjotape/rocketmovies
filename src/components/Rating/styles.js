import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: ${({ isbigSize }) => (isbigSize ? "1px" : "0.6px")};

  svg {
    font-size: ${({ isbigSize }) => (isbigSize ? "28px" : "17px")};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;