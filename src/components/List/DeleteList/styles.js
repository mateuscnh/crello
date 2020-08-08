import styled from 'styled-components';

export const DeleteList = styled.div`
    width: 30px;
    height: 30px;

    text-align: center;
            
    transition: .15s;

    cursor: pointer;

    display: grid;
    place-items: center;

    transition: .15s;

    :hover{
        border-radius: 4px;
        background-color: ${props => props.theme.colors.hover};
    }
`