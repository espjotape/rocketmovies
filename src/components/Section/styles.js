import styled from "styled-components";

export const Container = styled.section`
 margin: 24px 0;
 > h2 {
    font-size: 36px;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 24px;
 }
`
