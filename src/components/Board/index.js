import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

import BoardContext from './context';

import Input from '../Input';
import Button from '../Button';

import { Container, ListWrapper, AddNewList, CreateNewList } from './styles';

import List from '../List';
import api from '../../services/api';

export default function Board() {
    const [listCards, setListCards] = useState([]);
    const [colors, setColors] = useState([]);

    const [isNewList, setNewList] = useState(false);

    useEffect(() => {
        api.get('lists?_embed=cards').then(response => setListCards(response.data));
        api.get('colors').then(response => setColors(response.data));
    }, [])

    return (
        <BoardContext.Provider value={{ listCards, setListCards, colors, setColors }}>
            <Container background="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop">
                <ListWrapper>
                    {listCards.map(list => {
                        return <List key={list.id} list={list} />
                    })}
                    {isNewList ?
                        <CreateNewList>
                            <Input placeholder="Insira um título para esta lista..."
                                onChange={() => { }}
                                onKeyPress={() => { }}
                            />
                            <footer>
                                <Button onClick={() => { }} />
                                <FaTimes onClick={() => setNewList(false)} />
                            </footer>
                        </CreateNewList>
                        :
                        <AddNewList onClick={() => setNewList(true)} />
                    }
                </ListWrapper>
            </Container>
        </BoardContext.Provider>
    );
}