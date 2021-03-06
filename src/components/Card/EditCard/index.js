import React, { useContext, useState } from 'react';

import BoardContext from '../../Board/context';

import api from '../../../services/api';

import LabelColor from '../../LabelColor';
import InputTitle from '../../InputTitle';

import { Container, Content, TextArea, CloseCard, QuoteIcon, TagIcon, DeleteCard } from './styles';

export default function ({ card, onClose }) {
    const { listCards, setListCards } = useContext(BoardContext);

    const [title, setTitle] = useState(card.title);
    const [description, setDescription] = useState(card.description);
    const [color, setColor] = useState(card.color);

    function handleClose(e) {
        if (e.target.id === 'card') {
            onClose();
            updateCard();
        };
    }

    async function updateCard() {
        const newCard = await api.put(`cards/${card.id}`, {
            listId: card.listId,
            title,
            description,
            color
        });

        const updateListCards = await listCards.map(listCard => {
            if (listCard.id === card.listId) {
                const newCards = listCard.cards.map(item => {
                    if (item.id === card.id) return item = newCard.data;
                    return item;
                })
                listCard.cards = newCards
                return listCard;
            }
            return listCard;
        })

        setListCards(updateListCards);
    }

    async function deleteCard() {
        try {
            await api.delete(`cards/${card.id}`);

            const newListCards = await listCards.map(listCard => {
                const newCards = listCard.cards.filter(cardItem => {
                    return cardItem.id !== card.id;
                })
                return { ...listCard, cards: newCards };
            })

            setListCards(newListCards);
        } catch (e) {
            alert('Unexpected error: ', e);
        }
    }

    return (
        <Container id="card" onClick={handleClose}>
            <Content>
                <InputTitle
                    fontSize="22px"
                    defaultValue={card.title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <CloseCard onClick={() => { onClose(); updateCard(); }} />

                <h3><QuoteIcon />Descrição</h3>
                <TextArea placeholder="Adicione uma descrição mais detalhada..." defaultValue={card.description} onChange={(e) => setDescription(e.target.value)} />

                <h3><TagIcon />Etiqueta</h3>
                <LabelColor color={card.color} changeColor={(color) => setColor(color)} />

                <DeleteCard id="delete" onClick={deleteCard} />
            </Content>
        </Container>
    );
}