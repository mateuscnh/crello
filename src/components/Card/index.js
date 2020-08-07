import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

import { Container, CardLabel } from './styles';
import EditCard from '../EditCard';

export default function ({ card }) {
    const [editCard, setEditCard] = useState(false);

    return (
        <>
            <Container onClick={() => setEditCard(true)}>
                <FaEdit />
                <CardLabel color={card.color}>&nbsp;</CardLabel>
                <p>{card.title}</p>
            </Container >
            {editCard &&
                <EditCard card={card} onClose={() => { setEditCard(false) }} />
            }
        </>
    );
}