import React, { useState } from 'react';

import { Container } from './styles';
import background from '../../assets/background.jpg';

import List from '../List';

export default function Board() {
    const [listCards, setListCards] = useState([
        {
            id: 0,
            title: 'A fazer',
            cards: [
                {
                    id: 0,
                    title: 'Harry Potter',
                    labelColor: 'black'
                },
                {
                    id: 1,
                    title: 'Marvel',
                    labelColor: 'red'
                },
            ]
        },
        {
            id: 1,
            title: 'Em andamento',
            cards: [
                {
                    id: 0,
                    title: 'Arrow',
                    labelColor: 'green'
                },
                {
                    id: 1,
                    title: 'DC',
                    labelColor: 'blue'
                },
            ]
        },
        {
            id: 2,
            title: 'Concluído',
            cards: [
                {
                    id: 0,
                    title: 'Dark',
                    labelColor: 'brown'
                },
                {
                    id: 1,
                    title: 'Stranger Things',
                    labelColor: 'purple'
                },
            ]
        },
    ]);

    return (
        <Container background={background}>
            {listCards.map(list => {
                return <List key={list.id} list={list} />
            })}
        </Container>
    );
}