import React from 'react';
import styled from 'styled-components';

const NewButton = styled.button`
    border-radius: 4px;
    height: 34px;
    padding: 6px 10px;
    border: none;
    color: #fff;
    background-color: ${props => props.theme.colors.button};
    transition: .2s;
    outline: none;
        
    cursor: pointer;

    :hover{
        background-color: ${props => props.theme.colors.buttonHover};
    }
`

export default function ({ ...props }) {
    return <NewButton type="button" {...props}>Adicionar</NewButton>;
}

