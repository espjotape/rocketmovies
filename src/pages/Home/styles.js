import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 90px auto ;
  grid-template-areas: 
  "header"
  "content";

  > main {
    width: 80%;
    margin: 0 auto;
    
    overflow-y: hidden;
    padding: 0px 30px;

    > div {
      overflow-y: scroll;
      padding: 0 6px;
    }

    > div::-webkit-scrollbar {
    width: 0.8rem;
  }

    > div::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
    }
     
`

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


export const Content = styled.div`
 width: 98%;
 margin: 0 auto;
 grid-area: content;

 overflow-y: auto;
 padding: 0 6px;

  
`
