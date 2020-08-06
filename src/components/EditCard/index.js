import React, { useContext, useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

import BoardContext from '../Board/context';

import api from '../../services/api';

import LabelColor from '../LabelColor';

import { Container, Content, Input, TextArea } from './styles';

function EditCard({ card, onClose }) {
    const { listCards, setListCards } = useContext(BoardContext);

    const [title, setTitle] = useState(card.title);
    const [description, setDescription] = useState(card.description);
    const [color, setColor] = useState(card.color);

    function handleClose(e) {
        if (e.target.id === 'modal') onClose();
        updateCard()
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

    return (
        <Container id="modal" onClick={handleClose}>
            <Content>
                <Input type="text" defaultValue={card.title} onChange={(e) => setTitle(e.target.value)} />
                <FaTimes onClick={onClose} />

                <h3>Descrição</h3>
                <TextArea placeholder="Adicione uma descrição mais detalhada..." defaultValue={card.description} onChange={(e) => setDescription(e.target.value)} />

                <h3>Etiqueta</h3>
                <LabelColor color={card.color} changeColor={(color) => setColor(color)} />

            </Content>
        </Container>
    );
}

export default EditCard;