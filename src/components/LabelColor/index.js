import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

import Colors from './Colors';

import { Container, LabelColor } from './styles';

export default function ({ color, changeColor }) {
    const [colorsActive, setColorsActive] = useState(false);
    const [chosenColor, setChosenColor] = useState(color);

    useEffect(() => { setChosenColor(color) }, [color]);

    return (
        <Container>
            <LabelColor className="labelColor" color={chosenColor} onClick={() => setColorsActive(true)}>
                <FaCheck />
            </LabelColor>
            {colorsActive &&
                <Colors chosenColor={chosenColor} onClose={(color) => {
                    setChosenColor(color);
                    if (changeColor) changeColor(color);
                    setColorsActive(false);
                }} />
            }
        </Container>
    );
}