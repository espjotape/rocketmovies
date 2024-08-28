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
    overflow-y: hidden;
  }   
`
export const Content = styled.div`
 grid-area: content;
 overflow-y: auto;

> section {
  max-height: 500px;
  overflow-y: auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap:20px;
}

> section::-webkit-scrollbar {
    width: 0.8rem;
  }

> section::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
`;

export const NewNote = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top:20px;
  margin-bottom:20px;

  > button {
    height: 48px; 
    
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

