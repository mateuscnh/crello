import React from 'react';
import { FaTimes, FaPencilAlt } from 'react-icons/fa';

import { Container, Content, Input } from './styles';

function EditCard({ card, onClose }) {
    return (
        <Container>
            <Content>
                <FaTimes onClick={onClose} />
                <Input value={card.title} editables />
                <h3>Descrição</h3>
                <textarea value="Adicione uma descrição mais detalhada..."></textarea>
            </Content>
        </Container>
    );
}

export default EditCard;