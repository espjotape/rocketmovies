import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 height: 100vh;
 grid-template-rows: 116px 48px auto;
 grid-template-areas:
 "header"
 "newnote"
 "content";

 > main {
  width: 80%;
  margin: 50px auto;
 }
`

export const NewNote = styled.div`
  grid-area: content;
  
  height: 40px;
  margin-bottom: 60px;
  display: flex;
 
  justify-content: flex-end;

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

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
`