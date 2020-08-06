import React, { useContext, useState } from 'react';

import BoardContext from '../Board/context';

import { ListWrapper, ListContent, Input } from './styles';
import Card from '../Card';
import api from '../../services/api';

export default function List({ list }) {
    const { listCards, setListCards } = useContext(BoardContext);
    const [isNewCard, setNewCard] = useState(false);
    const [title, setTitle] = useState('');

    async function addNewCard() {
        const newCard = await api.post('cards', {
            listId: list.id,
            title
        })

        const updateListCards = await listCards.map(listCard => {
            if (listCard.id === list.id) {
                listCard.cards.push(newCard.data)
            }
            return listCard;
        })

        setListCards(updateListCards);

        setNewCard(false);
    }

    return (
        <ListWrapper>
            <header><p>{list.title}</p></header>
            <ListContent id="target">
                {list.cards.map(card => {
                    return <Card key={card.id} card={card} />
                })}
            </ListContent>
            {isNewCard ?
                <footer>
                    <Input autoFocus name="title" placeholder="Insira um título para este cartão..." onChange={(e) => setTitle(e.target.value)} />
                    <button type="button" onClick={addNewCard}>Adicionar Cartão</button>
                </footer>
                :
                <footer><p onClick={() => setNewCard(true)}>+ Adicionar outro cartão</p></footer>
            }
        </ListWrapper>
    );
}