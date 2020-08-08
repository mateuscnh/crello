import React from 'react';
import styled from 'styled-components';

const Input = styled.input`  
    padding: 0 10px;
    font-size: ${props => props.fontSize};
    font-weight: bold;
    background: none;
    border-radius: 4px;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    
    :focus{
        cursor: initial;
        background-color: ${props => props.theme.colors.cardBackground};
    }
`

export default function InputTitle({ ...props }) {
    return <Input {...props} autoComplete="off" type="text" />;
}