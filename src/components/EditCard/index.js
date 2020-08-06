import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import LabelColor from '../LabelColor';

import { Container, Content, Input, TextArea } from './styles';

function EditCard({ card, onClose }) {
    const [labelColor, setLabelColor] = useState(card.labelColor)

    function handleClose(e) {
        if (e.target.id === 'modal') onClose();
    }

    return (
        <Container id="modal" onClick={handleClose}>
            <Content>
                <Input type="text" defaultValue={card.title} />
                <FaTimes onClick={onClose} />

                <h3>Descrição</h3>
                <TextArea placeholder="Adicione uma descrição mais detalhada..." />

                <h3>Etiqueta</h3>
                <LabelColor />
            </Content>
        </Container>
    );
}

export default EditCard;