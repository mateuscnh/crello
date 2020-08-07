import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
    from{opacity: 0}
`

export const Container = styled.div`
    position: fixed;
    padding: 2%;
    width: 100vw;
    height: 100vh;
    background: url(${props => props.background}) no-repeat center;
    background-size: cover; 
    overflow: auto;

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
    display: flex;
    align-items: flex-start;
`

export const CreateNewList = styled.div`
    margin-right: 300px;
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
    margin-right: 300px;
    min-width: 270px;
    text-align: center;
    color: #fff;
    background-color: rgba(250, 250, 250, .2);
    border-radius: 4px;
    padding: 10px;
    transition: .15s;
    cursor: pointer;

    :hover{
        background-color: rgba(250, 250, 250, .4);
    }

`
