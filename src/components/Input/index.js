import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 12px;
    background-color: ${props => props.theme.colors.cardBackground};
    color: ${props => props.theme.colors.text};
    box-shadow: 0 2px 0 0 #ccc;
`

export default function ({ ...props }) {
    return <Input
        {...props}
        autoFocus
        autoComplete="off"
    />
}