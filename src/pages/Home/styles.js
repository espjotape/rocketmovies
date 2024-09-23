import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;

  display: grid;
  grid-template-rows: 50px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    width: 100%;
    max-width: 1350px;
    margin: 80px auto;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 38px;

      h1 {
        font-weight: 400;
        padding-left: 22px
      }
    }
  }
`;

export const Content = styled.div`
   h2 {
    text-align: center;
    font-size: 32px;
  }

  > section {
    max-height: calc(80vh - 89.7px);
    overflow-y: auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    
}

  > section::-webkit-scrollbar {
    width: 8px;
  }

  > section::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`;

export const NewMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 20px 32px;
  border-radius: 8px;
`;