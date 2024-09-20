import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: ${({ isBigSize }) => (isBigSize ? "1px" : "0.6px")};

  svg {
    font-size: ${({ isBigSize }) => (isBigSize ? "20px" : "17px")};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;