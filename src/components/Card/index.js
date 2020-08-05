import React from 'react';

import { Container, CardLabel } from './styles';

export default function ({ card }) {
    return (
        <Container>
            <CardLabel color={card.labelColor}>&nbsp;</CardLabel>
            <p>{card.title}</p>
        </Container>
    );
}