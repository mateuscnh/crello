import styled from 'styled-components';

export const ListWrapper = styled.div`
    width: 280px;
    background-color: ${props => props.theme.colors.listBackground};
    font-size: 14px;
    font-weight: 700;
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
        height: 40px;
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