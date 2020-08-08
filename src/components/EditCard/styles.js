import styled, { keyframes } from 'styled-components';
import { FaTimes, FaQuoteRight, FaTag, FaTrashAlt } from 'react-icons/fa';


const FadeIn = keyframes`
    from{opacity: 0}
`

export const Container = styled.div`
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: grid;
    place-items: center;
    
    animation: ${FadeIn} .15s linear;
    background-color: rgba(0, 0, 0, .5);
`

export const Content = styled.div`
    position: relative;
    padding: 20px;
    padding-bottom: 60px;
    min-width: 400px;
    border-radius: 4px;

    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.listBackground};

    animation: ${FadeIn} .15s linear;

    h3{
        margin: 24px 0 10px 0;
        padding: 6px;
    }

    h3 + div, textarea{
        margin-left: 28px;
    }
`

export const TextArea = styled.textarea`
    width: 90%;
    min-height: 60px;
    max-height: 240px;
    border-radius: 4px;
    padding: 10px;
    background-color: rgba(0,0,0,.05);
    resize: vertical;
    transition: .3s;
    
    :focus{
        background-color: ${props => props.theme.colors.cardBackground};
    }
`

export const CloseCard = styled(FaTimes)`
    position: absolute;
    top: 20px;
    right: 20px;

    cursor: pointer;

    transition: transform .2s;
        
    :hover{
        transform: scale(1.15);
    }
`

export const QuoteIcon = styled(FaQuoteRight)`
    font-size: 12px;
    margin-right: 10px;
    opacity: .5;
`

export const TagIcon = styled(FaTag)`
    font-size: 12px;
    margin-right: 10px;
    opacity: .5;
`

export const DeleteCard = styled(FaTrashAlt)`
    position: absolute;
    bottom: 20px;
    right: 10px;
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;

    transition: transform .2s;
        
    :hover{
        transform: scale(1.15);
    }
`