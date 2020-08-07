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