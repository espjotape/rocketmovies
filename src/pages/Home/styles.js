import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 110px auto ;
  grid-template-areas: 
  "header"
  "content";
  
  > main {
    grid-area: content;
    margin: 0 123px;
    max-width: 113.7rem;
    overflow-y: hidden;
    padding-bottom: 10px;

  }   
`
export const Content = styled.div`
 grid-area: content;
 overflow-y: auto;

> section {
  
  max-height: 600px;
  overflow-y: auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap:20px;
}

> section::-webkit-scrollbar {
    width: 7px;
  }

> section::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`;

export const NewNote = styled.div`
  grid-area: content;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top:20px;
  margin-bottom:20px;
  height: 58px; 
  

  > button {
    border: none;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 10px;
    
    padding: 32px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }
`

