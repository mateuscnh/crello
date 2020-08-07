import React, { useContext, useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

import BoardContext from '../Board/context';

import Button from '../Button';
import Input from '../Input';
import LabelColor from '../LabelColor';
import Card from '../Card';

import { ListWrapper, ListContent, NewCard } from './styles';
import api from '../../services/api';

export default function List({ list }) {
    const { listCards, setListCards } = useContext(BoardContext);
    const { colors } = useContext(BoardContext);

    const [isNewCard, setNewCard] = useState(false);
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');

    useEffect(() => {
        colors.length > 0 && setColor(colors[0].color);
    }, [colors])

    async function addNewCard() {
        const description = '';

        const newCard = await api.post('cards', {
            listId: list.id,
            title,
            description,
            color
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
                    <Input
                        placeholder="Insira um título para este cartão..."
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyPress={(e) => e.charCode === 13 && document.querySelector('button').click()}
                    />
                    <footer>
                        <LabelColor color={color} changeColor={color => setColor(color)} />
                        <Button onClick={addNewCard} />
                        <FaTimes onClick={() => setNewCard(false)} />
                    </footer>
                </NewCard>
                :
                <footer><p onClick={() => setNewCard(true)}>+ Adicionar cartão</p></footer>
            }
        </ListWrapper>
    );
}