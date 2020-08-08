import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
    from{opacity: 0}
`

export const CreateNewCard = styled.div`
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

export const FooterNewCard = styled.footer`
    margin-top: 10px;
    padding: 0;
    display: flex;
    align-items: center;
`

export const PrimaryFooter = styled.footer`
    min-height: 40px;
    padding: 10px;
    padding-top: 0;

    p{
        font-size: 12px;
        font-weight: 600;
        padding: 6px 16px;
        cursor: pointer;
        transition: .15s;
            
        :hover{
            background-color: ${props => props.theme.colors.hover};
            border-radius: 4px;
        }
    }
`