import React from 'react';

import { Container } from './styles';
import background from '../../assets/background.jpg';

import List from '../List';

export default function Board() {
    return (
        <Container background={background}>
            <List titleList="A fazer" />
            <List titleList="Em andamento" />
            <List titleList="Concluído" />
        </Container>
    );
}