import React, { useContext, useState } from 'react';

import { FaTrashAlt } from 'react-icons/fa';

import BoardContext from '../../Board/context';

import { DeleteList } from './styles';

import api from '../../../services/api';

export default function ({ listId }) {
    const { listCards, setListCards } = useContext(BoardContext);

    const [isDeleteList, setDeleteList] = useState(false);

    async function deleteList() {
        try {
            await api.delete(`lists/${listId}`);

            const newListCards = await listCards.filter(listCard => {
                return listCard.id !== listId;
            })

            setListCards(newListCards);

        } catch (e) {
            alert("Unexpected error");
        }
    }

    return (
        <div tabIndex="0" onBlur={() => setDeleteList(false)}>
            {isDeleteList ?
                <DeleteList onClick={deleteList}><FaTrashAlt /></DeleteList>
                :
                <DeleteList onClick={() => setDeleteList(true)}>...</DeleteList>
            }
        </div>
    );
}