import React, { useState, useEffect } from 'react';

import BoardContext from './context';

import Loading from './Loading';
import NewList from '../NewList';

import { Container, ListWrapper } from './styles';

import List from '../List';
import api from '../../services/api';

export default function () {
    const background = "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop";

    const [listCards, setListCards] = useState([]);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        api.get('lists?_embed=cards').then(response => setListCards(response.data));
        api.get('colors').then(response => setColors(response.data));
    }, []);

    return (
        <BoardContext.Provider value={{ listCards, setListCards, colors, setColors }}>
            <Loading />
            <Container background={background}>
                <ListWrapper>
                    {listCards.map(list => {
                        if (list.id === 0) return null;
                        return <List key={list.id} list={list} />
                    })}
                    <NewList />
                </ListWrapper>
            </Container>
        </BoardContext.Provider>
    );
}