import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    width: 1350px;
    margin: 0 auto;
    overflow-y: hidden;

    > section {
      max-height: 90%;
      overflow-y: auto;
      padding: 0 20px;
    }

    > section::-webkit-scrollbar {
      padding-top: 10px;
      width: 6px;
    }

    > section::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }

  }
`

export const Content = styled.div`
  grid-area: content;
  
  margin: 40px auto;
  
  >h1 {
    font-size: 36px;
    margin-bottom: 30px;
  }

  > header {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 20px;
        
      > svg {
        height: 12px;
        width: 12px;

        color: ${({ theme }) => theme.COLORS.PINK};
      }
  }

  > section {
      display: flex;
      gap: 30px;
      margin-bottom: 20px;
    
  }
 
`
export const Footer = styled.div`
  grid-area: content;
  margin-bottom: 20px;
  align-items: center;
  

  > .tags {
    display: flex;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    gap: 24px;
    padding: 16px;
    border-radius: 16px;
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    gap: 30px;
    margin-bottom: 20px;

    > .delete{
      border: none;
      background: none;
      width: 100%;
      height: 56px;

      background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
      color: ${({theme}) => theme.COLORS.PINK};
      border-radius: 10px;
    }
    > .save{
      border: none;
      background: none;
      width: 100%;
      height: 56px;

      background-color: ${({theme}) => theme.COLORS.PINK};
      color: ${({theme}) => theme.COLORS.BACKGROUND_900};
      border-radius: 10px;
    }
  }
`
