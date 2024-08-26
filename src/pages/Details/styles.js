import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 130px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    width:100%;
    overflow-y: hidden;
    padding: 5px 78px;

    > div {
      height:100%;
      overflow-y: auto;
      padding: 0 6px;
    }

    > div::-webkit-scrollbar {
      width: 7px;
    }

    > div::-webkit-scrollbar-thumb {
      background-color: ${({theme}) => theme.COLORS.PINK};
      border-radius: 8px;
    }
  }
`

export const Content = styled.div`
  width: 85%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: flex-start;
  }

  .text {
    margin-top: 40px;
    text-align: justify;
    margin-bottom: 80px;
  } 
`
export const Avatar = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 40px;

  img {
    width : 25px;
    height: 25px;
    border-radius: 50%
  }

  > svg {
    margin-right: -5px;
    color: ${({ theme }) => theme.COLORS.PINK}
  }
`
