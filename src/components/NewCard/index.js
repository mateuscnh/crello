import React, { useContext, useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

import api from '../../services/api';
import BoardContext from '../Board/context';

import Input from '../Input';
import Button from '../Button';
import LabelColor from '../LabelColor';

import { CreateNewCard, FooterNewCard, PrimaryFooter } from './styles';

export default function ({ listId }) {
    const { listCards, setListCards, colors } = useContext(BoardContext);

    const [createNewCard, setCreateNewCard] = useState(false);
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');

    useEffect(() => {
        colors.length > 0 && setColor(colors[0].color);
    }, [colors])

    async function addNewCard() {
        try {
            const newCard = await api.post('cards', {
                listId,
                title,
                description: '',
                color
            })

            const newListCards = await listCards.map(list => {
                if (list.id === listId) {
                    list.cards.push(newCard.data)
                }
                return list;
            })

            setListCards(newListCards);

            setCreateNewCard(false);

        } catch (e) {
            alert("Unexpected error");
        }
    }

    return (
        <>
            {createNewCard ?
                <CreateNewCard
                    tabIndex="0"
                    onBlur={(e) => { if (!e.nativeEvent.relatedTarget) setCreateNewCard(false) }}
                    onKeyPress={(e) => e.charCode === 13 && document.querySelector('button').click()}
                >
                    <Input placeholder="Insira um título para este cartão..."
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <FooterNewCard>
                        <LabelColor color={color} changeColor={color => setColor(color)} />
                        <Button onClick={addNewCard} />
                        <FaTimes onClick={() => setCreateNewCard(false)} />
                    </FooterNewCard>
                </CreateNewCard>
                :
                <PrimaryFooter>
                    <p onClick={() => setCreateNewCard(true)}>+ Adicionar cartão</p>
                </PrimaryFooter>
            }
        </>
    );
}