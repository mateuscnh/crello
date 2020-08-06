import styled from 'styled-components';

export const ListWrapper = styled.div`
    width: 270px;
    background-color: ${props => props.theme.colors.listBackground};
    font-size: 14px;
    font-weight: 600;
    border-radius: 4px;
    overflow: hidden;
    margin-right: 8px;
    color: ${props => props.theme.colors.text};

    header{
        height: 40px;
    
        p{
            padding: 14px 20px;
        }
        
    }

    footer{
        min-height: 40px;
        padding: 10px;
        padding-top: 0;

        p{
            font-size: 12px;
            font-weight: 600;
            padding: 6px 16px;
            cursor: pointer;
                &:hover{
                    background-color: ${props => props.theme.colors.hover};
                    border-radius: 4px;
                }
        }
    }
`

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 12px;
    background-color: ${props => props.theme.colors.cardBackground};
    border: none;
    color: ${props => props.theme.colors.text};
    box-shadow: 0 2px 0 0 #ccc;
    outline: none;

`

export const ListContent = styled.div`
    padding-bottom: 8px;
`

export const NewCard = styled.div`
    padding: 10px;
    padding-top: 0;
    margin-top: 0;  

    footer{
        margin-top: 10px;
        padding: 0;
        display: flex;
        align-items: center;
    }

    button{
        margin-left: 4px;
        border-radius: 4px;
        height: 34px;
        padding: 6px;
        border: none;
        color: #fff;
        background-color: #61BD4F;
        transition: .2s;
        :hover{
            background-color: #6fd25b;
        }

        cursor: pointer;
    }

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