import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 105px;
  padding: 20px 120px;
  gap: 34px;

  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .search{
    flex-grow: 1;
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

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6.4rem;
  flex-grow: 1;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  
  > img {
    height: 56px;
    width: 56px;
    border-radius: 50%;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 14px;

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE}
    }
  }
`
export const Logout = styled.button`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY};
  font-weight: 300;

  border: none;
  background: none;

  position: absolute;
  bottom: 1.5rem;
  right: 12rem;
`

