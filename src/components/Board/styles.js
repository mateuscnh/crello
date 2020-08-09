import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
    from{opacity: 0}
`

export const Container = styled.div`
    padding-top: 40px;
    padding-bottom: .5%;
    min-width: 100vw;
    height: 100vh;
    background: url(${props => props.background}) no-repeat center;
    background-attachment: fixed;
    background-size: cover;

    button + svg{
        font-size: 22px;
        opacity: .6;
        margin-left: 20px;
        cursor: pointer;
        transition: .2s;

        :hover{
            transform: scale(1.2);
        }
    } 
`

export const ListWrapper = styled.div`
    padding: 1%;
    height: 100%;

    display: flex;
    align-items: start;
    overflow: auto;
`

export const CreateNewList = styled.div`
    min-width: 270px;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.listBackground};
    padding: 10px;
    border-radius: 4px;

    animation: ${FadeIn} .15s linear;

    footer{
        margin-top: 10px;
        padding: 0;
        display: flex;
        align-items: center;
    }
`

export const AddNewList = styled.div`
    min-width: 270px;
    text-align: center;
    color: #fff;
    background-color: rgba(250, 250, 250, .2);
    border-radius: 4px;
    padding: 6px 10px;
    transition: .15s;
    cursor: pointer;
    font-size: 14px;

    animation: ${FadeIn} .15s linear;

    :hover{
        background-color: rgba(250, 250, 250, .4);
    }
`
