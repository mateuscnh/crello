import React, { useContext, useState } from 'react';

import BoardContext from '../Board/context';

import InputTitle from '../InputTitle';
import Card from '../Card';
import NewCard from './NewCard';
import DeleteList from './DeleteList';

import { ListWrapper, Header, ListContent } from './styles';

import api from '../../services/api';

export default function ({ list }) {
    const { listCards, setListCards } = useContext(BoardContext);

    const [title, setTitle] = useState(list.title);

    function handleBlurListTitle() {
        if (title === list.title) return;

        api.patch(`lists/${list.id}`, {
            title
        })

        const updateListCards = listCards.map(item => {
            if (item.id === list.id) {
                item.title = title;
                return item;
            }
            return item;
        })

        setListCards(updateListCards);
    }

    return (
        <ListWrapper>
            <Header>
                <InputTitle
                    fontSize="14px"
                    defaultValue={list.title}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={handleBlurListTitle}
                />
                <DeleteList listId={list.id} />
            </Header>
            <ListContent>
                {list.cards.map(card => {
                    return <Card key={card.id} card={card} />
                })}
            </ListContent>
            <NewCard listId={list.id} />
        </ListWrapper>

    );
}