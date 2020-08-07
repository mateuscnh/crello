import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

import BoardContext from './context';

import Input from '../Input';
import Button from '../Button';
import Loading from '../Loading';

import { Container, ListWrapper, AddNewList, CreateNewList } from './styles';

import List from '../List';
import api from '../../services/api';

export default function Board() {
    const [listCards, setListCards] = useState([]);
    const [colors, setColors] = useState([]);
    const [title, setTitle] = useState('');

    const [loading, setLoading] = useState(true);

    const [isNewList, setNewList] = useState(false);

    useEffect(() => {
        api.get('lists?_embed=cards').then(response => setListCards(response.data));
        api.get('colors').then(response => setColors(response.data));

        setTimeout(() => setLoading(false), 2000);
    }, []);

    async function addNewList() {

        const newList = await api.post('lists', {
            title
        })

        setListCards([...listCards, {
            id: newList.data.id,
            title: newList.data.title,
            cards: []
        }]);

        setNewList(false);
    }

    return (
        <BoardContext.Provider value={{ listCards, setListCards, colors, setColors }}>
            {loading ?
                <Loading />
                :
                <Container background="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop">

                    <ListWrapper>
                        {listCards.map(list => {
                            if (list.id === 0) return null;
                            return <List key={list.id} list={list} />
                        })}

                        {isNewList ?
                            <>
                                <CreateNewList>
                                    <Input placeholder="Insira um título para esta lista..."
                                        onChange={(e) => setTitle(e.target.value)}
                                        onKeyPress={(e) => e.charCode === 13 && document.querySelector('button').click()}
                                    />
                                    <footer>
                                        <Button onClick={addNewList} />
                                        <FaTimes onClick={() => setNewList(false)} />
                                    </footer>
                                </CreateNewList>
                                <h1>&nbsp;&nbsp;</h1>
                            </>
                            :
                            <>
                                <AddNewList onClick={() => setNewList(true)}>+ Adicionar lista</AddNewList>
                                <h1>&nbsp;&nbsp;</h1>
                            </>
                        }
                    </ListWrapper>
                </Container>
            }
        </BoardContext.Provider>
    );
}