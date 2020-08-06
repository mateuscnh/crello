import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

import { Container, Color } from './styles';

export default function Colors({ onClose }) {
    const [colors, setColors] = useState([
        { choice: true, color: '#f9c80e' },
        { choice: false, color: '#f86624' },
        { choice: false, color: '#c8553d' },
        { choice: false, color: '#ea3546' },
        { choice: false, color: '#662e9b' },
        { choice: false, color: '#43bccd' },
        { choice: false, color: '#333533' }
    ]);

    function handleClick(e) {
        const updateChoiceColor = colors.map(item => {
            if (item.color === e.target.id) {
                return { choice: true, color: item.color };
            }
            return { choice: false, color: item.color };
        })

        setColors(updateChoiceColor);
        // Send color to element father
        onClose(e.target.id);
    }

    return (
        <Container>
            {colors.map(item => {
                return <Color key={item.color} id={item.color} color={item.color} onClick={handleClick}>
                    {item.choice &&
                        <FaCheck />
                    }
                </Color>
            })}
        </Container>
    );
}