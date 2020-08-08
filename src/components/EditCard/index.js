import React, { useContext, useState } from 'react';
import { FaTimes, FaQuoteRight, FaTag } from 'react-icons/fa';

import BoardContext from '../Board/context';

import api from '../../services/api';

import LabelColor from '../LabelColor';
import InputTitle from '../InputTitle';

import { Container, Content, TextArea } from './styles';

function EditCard({ card, onClose }) {
    const { listCards, setListCards } = useContext(BoardContext);

    const [title, setTitle] = useState(card.title);
    const [description, setDescription] = useState(card.description);
    const [color, setColor] = useState(card.color);

    function handleClose(e) {
        if (e.target.id === 'card') onClose();
        updateCard();
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
        <Container id="card" onClick={handleClose}>
            <Content>
                <InputTitle
                    fontSize="22px"
                    defaultValue={card.title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <FaTimes onClick={onClose} />

                <h3><FaQuoteRight />Descrição</h3>
                <TextArea placeholder="Adicione uma descrição mais detalhada..." defaultValue={card.description} onChange={(e) => setDescription(e.target.value)} />

                <h3><FaTag />Etiqueta</h3>
                <LabelColor color={card.color} changeColor={(color) => setColor(color)} />

            </Content>
        </Container>
    );
}

export default EditCard;