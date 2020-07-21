import styled from 'styled-components';

export default styled.div`
    width: 280px;
    background-color: ${props => props.theme.colors.listBackground};
    font-size: 14px;
    font-weight: bold;
    border-radius: 4px;
    overflow: hidden;
    margin-right: 8px;
    color: ${props => props.theme.colors.text};

    header{
        height: 40px;

        p{
            padding: 10px;
        }
        
    }

    footer{
        height: 40px;
        padding: 4px 10px;

        p{
        font-size: 12px;
        padding: 8px 10px;
        cursor: pointer;

            &:hover{
                background-color: ${props => props.theme.colors.hover};
                border-radius: 4px;
            }
        }
    }

`