import React, { useState, useEffect } from 'react';
import produce from 'immer';

import BoardContext from './context';

import Loading from './Loading';
import NewList from './NewList';

import { Container, ListWrapper } from './styles';

import List from '../List';
import api from '../../services/api';

import Header from '../Header';

export default function () {
    const background = "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop";

    const [listCards, setListCards] = useState([]);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        api.get('lists?_embed=cards').then(response => setListCards(response.data));
        api.get('colors').then(response => setColors(response.data));
    }, []);

    useEffect(() => {
        function updateDatabase() {
            try {
                listCards.forEach(list => {
                    if (list.id === 0) return;

                    list.cards.forEach(async card => {
                        const { id, title, description, color } = card;

                        await api.put(`cards/${card.id}`, {
                            id,
                            listId: list.id,
                            title,
                            description,
                            color
                        });
                    })
                })
            } catch (e) {
                alert('Unexpected error: ', e);
            }
        }

        updateDatabase();

    }, [listCards])


    function moveCard(fromList, toList, from, to) {
        setListCards(produce(listCards, draft => {
            const dragged = draft[fromList].cards[from];

            draft[fromList].cards.splice(from, 1);
            draft[toList].cards.splice(to, 0, dragged);
        }))
    }

    return (
        <BoardContext.Provider value={{ background, listCards, setListCards, colors, setColors, moveCard }}>
            <Loading />
            <Container background={background}>
                <Header />
                <ListWrapper>
                    {listCards.map((list, index) => {
                        if (list.id === 0) return null;
                        return <List key={list.id} index={index} list={list} />
                    })}
                    <NewList />
                </ListWrapper>
            </Container>
        </BoardContext.Provider>
    );
}