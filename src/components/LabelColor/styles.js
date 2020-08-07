import styled from 'styled-components';

export const LabelColor = styled.div`
    width: 34px;
    height: 34px;
    border-radius: 4px;
    color: #fff;
    background-color: ${props => props.color};
    cursor: pointer;
    transition: opacity .2s;
    display: grid;
    place-items: center;

    :hover{
        opacity: .8;
    }
`