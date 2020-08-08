import React from 'react';
import styled from 'styled-components';
import { FaEdit } from 'react-icons/fa';

const Container = styled.div`
    position: relative;

    :hover svg{
        opacity: .8;
    }

`

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

const Edit = styled(FaEdit)`
    position: absolute;
    right: 36px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    cursor: pointer;
    pointer-events: none;
`

export default function InputTitle({ ...props }) {
    return (
        <Container>
            <Edit />
            <Input {...props} autoComplete="off" type="text" onKeyPress={(e) => e.charCode === 13 && e.target.blur()} />
        </Container>
    );
}