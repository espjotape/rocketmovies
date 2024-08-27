import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: right;
    height: 56px;
    width: 200px;

    background-color: ${({theme, $isnew}) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    border: ${({theme, $isnew}) => $isnew ? `1px dashed ${theme.COLORS.GRAY}` : "none"};

    
    border-radius: 10px; 
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({theme}) => theme.COLORS.PINK};
    }

    .button-add {
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY};
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            
        }      
    }
`;