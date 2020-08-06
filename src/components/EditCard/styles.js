import styled from 'styled-components';

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
    padding: 20px;
    min-width: 400px;
    min-height: 400px;
    border-radius: 4px;

    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.listBackground};

    svg{
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
    font-size: 24px;
    font-weight: bold;
    background: none;
    border: none;
    color: ${props => props.theme.colors.text};
    :focus{
        background-color: ${props => props.theme.colors.cardBackground};
        outline: none;
    }
`