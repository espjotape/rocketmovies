import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ROSE};

  border: none;
  padding: 32px;
  border-radius: 16px;
 
  

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY};
    text-align: justify;
    max-height:42px;
    overflow-y: hidden;
    margin-top: 8px;
    
  }

  > footer {
    display: flex;
    margin-top: 15px;
    
  }
`
