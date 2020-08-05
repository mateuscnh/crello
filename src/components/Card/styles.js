import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.cardBackground};
    min-height: 40px;
    margin: 10px;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 0 0 #ccc;
    cursor: pointer;
    transition: background-color .2s;
    
    p{
        font-weight: 300;
    }

    :hover{
        background-color: ${props => props.theme.colors.cardBackgroundDark};
    }
`

export const CardLabel = styled.span`
    background-color: ${props => props.color};
    display: block;
    width: 16%;
    height: 8px;
    border-radius: 3px;
    margin-bottom: 6px;
`;