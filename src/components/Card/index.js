import React, { useRef, useState, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { FaEdit } from 'react-icons/fa';

import BoardContext from '../Board/context';

import { Container, CardLabel } from './styles';

import EditCard from './EditCard';

export default function ({ card, index, listIndex }) {
    const [editCard, setEditCard] = useState(false);

    const ref = useRef();
    const { moveCard } = useContext(BoardContext);

    const [{ isDragging }, dragRef] = useDrag({
        item: { type: 'CARD', index, listIndex },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;

            const draggedIndex = item.index;
            const targetIndex = index;

            if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) return;

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;

            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;

            if (draggedIndex < targetIndex && draggedTop < targetCenter) return;

            if (draggedIndex > targetIndex && draggedTop > targetCenter) return;

            moveCard(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

            item.index = targetIndex;
            item.listIndex = targetListIndex;
        }
    });

    dragRef(dropRef(ref));

    return (
        <>
            <Container
                ref={ref}
                isDragging={isDragging}
                onClick={() => setEditCard(true)}
            >
                <FaEdit />
                <CardLabel color={card.color}>&nbsp;</CardLabel>
                <p>{card.title}</p>
            </Container >
            {editCard &&
                <EditCard card={card} onClose={() => { setEditCard(false) }} />
            }
        </>
    );
}