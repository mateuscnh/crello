import styled, { keyframes } from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';

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

    header{
        padding: 10px;
        height: 40px;
    
        input{
            padding: 4px 10px;
            width: 100%;
        } 

        svg{
            right: 10px;
        }     
    }

    footer{
        min-height: 40px;
        padding: 10px;
        padding-top: 0;

        display: flex;
        justify-content: space-between;

        p{
            font-size: 12px;
            font-weight: 600;
            padding: 6px 16px;
            cursor: pointer;
            width: 88%;
            transition: .15s;
            
            :hover{
                background-color: ${props => props.theme.colors.hover};
                border-radius: 4px;
            }
        }
    }
`

export const ListContent = styled.div`
    padding-bottom: 8px;
`

export const NewCard = styled.div`
    padding: 10px;
    padding-top: 0;
    margin-top: 0;

    animation: ${FadeIn} .2s linear; 

    footer{  
        margin-top: 10px;
        padding: 0;
        display: flex;
        align-items: center;
    }
`

export const DeleteList = styled.div`
    font-size: 12px;
    font-weight: 600;
    padding: 6px 10px;
    cursor: pointer;
    width: 12%;
    transition: .15s;
            
    :hover{
        background-color: ${props => props.theme.colors.hover};
        border-radius: 4px;
    }
`