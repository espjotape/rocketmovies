import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 105px;
  padding: 20px 120px;
  gap: 34px;

  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .search{
    width: 60%;
    display: flex;
    align-items: center;

    margin-bottom: 8px;
    border-radius:10px;
  
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.PURPLE};
  
  > input {
    width: 100%;

    padding: 19px 24px;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.PURPLE};
    }
  }
}
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  
  > img {
    height: 56px;
    width: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 14px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-weight: 300
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE}
    }
  }
`

