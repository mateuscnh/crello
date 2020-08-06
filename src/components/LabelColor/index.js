import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import Colors from './Colors';

const LabelColor = styled.div`
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

export default function ({ color, changeColor }) {
    const [colorsActive, setColorsActive] = useState(false);
    const [chosenColor, setChosenColor] = useState('')

    useEffect(() => { setChosenColor(color) }, []);

    return (
        <>
            <LabelColor className="labelColor" color={chosenColor} onClick={() => setColorsActive(true)}>
                <FaCheck />
            </LabelColor>
            {colorsActive &&
                <Colors onClose={(color) => {
                    setChosenColor(color);
                    if (changeColor) {
                        changeColor(color);
                    }
                    setColorsActive(false);
                }} />
            }
        </>
    );
}