import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
    from{opacity: 0}
`

export const ListWrapper = styled.div`
    min-width: 270px;
    background-color: ${props => props.theme.colors.listBackground};
    font-size: 14px;
    font-weight: 600;
    border-radius: 4px;
    margin-right: 8px;
    color: ${props => props.theme.colors.text};

    animation: ${FadeIn} .2s linear;
`

export const Header = styled.header`
    padding: 10px;
    height: 40px;

    display: flex;
    
    input{
        padding: 4px 10px;
    } 

    svg{
        top: 14px;
        right: 10px;
    } 

    @media (max-width: 700px){
        max-width: 215px;
    }
`

export const ListContent = styled.div`
    padding-bottom: 8px;
`
