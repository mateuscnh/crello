import React, { useState, useEffect } from 'react';

import BoardContext from './context';

import { Container } from './styles';
import background from '../../assets/background.jpg';

import List from '../List';
import api from '../../services/api';

export default function Board() {
    const [listCards, setListCards] = useState([]);

    useEffect(() => {
        api.get('lists?_embed=cards').then(response => setListCards(response.data))
    }, [])

    return (
        <BoardContext.Provider value={{ listCards, setListCards }}>
            <Container background={background}>
                {listCards.map(list => {
                    return <List key={list.id} list={list} />
                })}
            </Container>
        </BoardContext.Provider>
    );
}