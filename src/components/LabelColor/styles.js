import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`

export const LabelColor = styled.div`
    margin-right: 10px;
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