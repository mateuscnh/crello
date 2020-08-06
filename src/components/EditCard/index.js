import React from 'react';
import { FaTimes } from 'react-icons/fa';

import LabelColor from '../LabelColor';

import { Container, Content, Input, TextArea } from './styles';

function EditCard({ card, onClose }) {

    function handleClose(e) {
        if (e.target.id === 'modal') onClose();
    }

    return (
        <Container id="modal" onClick={handleClose}>
            <Content>
                <FaTimes onClick={onClose} />
                <Input type="text" defaultValue={card.title} />

                <h3>Descrição</h3>
                <TextArea placeholder="Adicione uma descrição mais detalhada..." />

                <h3>Etiqueta</h3>
                <LabelColor color={card.labelColor} />
            </Content>
        </Container>
    );
}

export default EditCard;