import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

const LabelColor = styled.div`
    width: 34px;
    height: 34px;
    border-radius: 4px;
    background-color: ${props => props.color};
    cursor: pointer;
    transition: opacity .2s;
    display: grid;
    place-items: center;
    
    :hover{
        opacity: .8;
    }

    svg{
        color: #fff;
        opacity: .6;
    }
`

export default function ({ color }) {
    return (
        <LabelColor className="labelColor" color={color}>
            <FaCheck />
        </LabelColor>
    );
}