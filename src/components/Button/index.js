import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    margin-left: 4px;
    border-radius: 4px;
    height: 34px;
    padding: 6px 10px;
    border: none;
    color: #fff;
    background-color: #61BD4F;
    transition: .2s;
    outline: none;
        
    cursor: pointer;

    :hover{
        background-color: #6fd25b;
    }
`

export default function ({ ...props }) {
    return <Button type="button" {...props}>Adicionar</Button>;
}
