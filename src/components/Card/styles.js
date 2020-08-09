import styled, { css, keyframes } from 'styled-components';

const FadeInRight = keyframes`
    from{width: 0%}
`

export const Container = styled.div`
    position: relative;
    background-color: ${props => props.theme.colors.cardBackground};
    min-height: 40px;
    margin: 10px;
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 4px;
    box-shadow: 0 2px 0 0 #ccc;
    cursor: pointer;
    transition: .15s; 
    
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

    :active svg{
        opacity: 0;
    }

    svg{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        opacity: 0;
        transition: .15s;
    }

    ${props => props.isDragging && css`
        border: 2px dashed rgba( 0, 0, 0, .2);
        border-radius: 4px;
        box-shadow: none;
        background: transparent;
        cursor: grabbing;
        transition: .2s;

        p, span{
            opacity: 0;
        }
        
    `}
    
    ${props => props.isOver && css`
        border: 2px dashed rgba( 0, 0, 0, .2);
        cursor: grabbing;
        background: transparent;

        p, span{
            opacity: 0;
        }
        
    `}
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