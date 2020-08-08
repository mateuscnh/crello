import styled, { keyframes } from 'styled-components';

const FadeInRight = keyframes`
    from{width: 0%}
`

export const Container = styled.div`
    position: relative;
    background-color: ${props => props.theme.colors.cardBackground};
    min-height: 40px;
    margin: 10px;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 0 0 #ccc;
    cursor: pointer;
    transition: .2s; 
    
    p{
        font-weight: 300;
        pointer-events: none;
    }

    :hover{
        background-color: ${props => props.theme.colors.cardBackgroundDark};
    }

    :hover svg{
        opacity: .8;
    }

    svg{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        opacity: 0;
        transition: .15s;
    }
`

export const CardLabel = styled.span`
    background-color: ${props => props.color};
    display: block;
    width: 16%;
    height: 8px;
    border-radius: 4px;
    margin-bottom: 6px;
    animation: ${FadeInRight} .3s linear;
`;