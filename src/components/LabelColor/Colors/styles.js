import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
    from{opacity: 0}
`
export const Container = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 10;
    padding: 10px;
    border-radius: 4px;
    width: 200px;

    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.listBackground};
    box-shadow: 0 6px 20px 0 #555;

    animation: ${FadeIn} .15s linear;
`

export const Color = styled.div`
    margin-bottom: 1px;
    width: 100%;
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