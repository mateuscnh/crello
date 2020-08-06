import React, { useContext, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import BoardContext from '../Board/context';

import { ListWrapper, ListContent, Input, NewCard } from './styles';
import Card from '../Card';
import api from '../../services/api';
import LabelColor from '../LabelColor';

export default function List({ list }) {
    const { listCards, setListCards } = useContext(BoardContext);
    const [isNewCard, setNewCard] = useState(false);
    const [title, setTitle] = useState('');
    const [labelColor, setlabelColor] = useState('#f9c80e');

    async function addNewCard() {
        const newCard = await api.post('cards', {
            listId: list.id,
            title,
            labelColor
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
                <NewCard>
                    <Input autoFocus name="title" placeholder="Insira um título para este cartão..." onChange={(e) => setTitle(e.target.value)} />
                    <footer>
                        <LabelColor color={labelColor} changeColor={color => setlabelColor(color)} />
                        <button type="button" onClick={addNewCard}>Adicionar Cartão</button>
                        <FaTimes onClick={() => setNewCard(false)} />
                    </footer>
                </NewCard>
                :
                <footer><p onClick={() => setNewCard(true)}>+ Adicionar cartão</p></footer>
            }
        </ListWrapper>
    );
}