import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
    from{opacity: 0}
`
export const Container = styled.div`
    position: absolute;
    top: 0;
    z-index: 10;
    padding: 10px;
    border-radius: 0 4px 4px 4px;

    display: flex;

    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.cardBackground};
    box-shadow: 0 2px 0 0 #ccc;

    animation: ${FadeIn} .15s linear;
`

export const Color = styled.div`
    margin-right: 2px;
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 4px;
    background-color: ${props => props.color};
    color: #fff;
    text-align: right;
    cursor: pointer;
    
    :hover{
        opacity: .9;
    }
`;