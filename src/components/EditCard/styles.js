import styled, { keyframes } from 'styled-components';

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
`

export const Content = styled.div`
    position: relative;
    padding: 30px;
    min-width: 400px;
    border-radius: 4px;

    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.listBackground};

    animation: ${FadeIn} .15s linear;

    h3{
        margin: 26px 0 10px 0;
        padding: 6px;
    }

    input + svg{
        position: absolute;
        right: 20px;
        color: ${props => props.theme.colors.text};

        cursor: pointer;

        transition: transform .2s;
        
        :hover{
            transform: scale(1.3);
        }
    }
`

export const Input = styled.input`
    width: 96%;
    padding: 6px;
    font-size: 24px;
    font-weight: bold;
    background: none;
    border: none;
    color: ${props => props.theme.colors.text};

    ::after{
        content: ' as';
        border: 2px solid red;
    }
    
    :focus{
        background-color: ${props => props.theme.colors.cardBackground};
        outline: none;
    }
`

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 60px;
    border: none;
    border-radius: 4px;
    padding: 10px;
    background-color: rgba(0,0,0,.05);
    resize: vertical;
    transition: .3s;
    
    :focus{
        background-color: ${props => props.theme.colors.cardBackground};
        outline: none;
    }
`