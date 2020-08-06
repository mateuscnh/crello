import React, { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';

import BoardContext from '../../Board/context';

import { Container, Color } from './styles';

export default function Colors({ chosenColor, onClose }) {
    const { colors } = useContext(BoardContext);

    return (
        <Container>
            {colors.map(item => {
                return <Color key={item.color} id={item.color} color={item.color} onClick={(e) => onClose(e.target.id)}>
                    {item.color === chosenColor &&
                        <FaCheck />
                    }
                </Color>
            })}
        </Container>
    );
}