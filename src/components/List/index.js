import React, { useContext, useState, useEffect } from 'react';
import { FaTimes, FaTrashAlt } from 'react-icons/fa';

import BoardContext from '../Board/context';

import Button from '../Button';
import Input from '../Input';
import InputTitle from '../InputTitle';
import LabelColor from '../LabelColor';
import Card from '../Card';

import { ListWrapper, ListContent, NewCard, DeleteList } from './styles';
import api from '../../services/api';

export default function List({ list }) {
    const { listCards, setListCards } = useContext(BoardContext);
    const { colors } = useContext(BoardContext);

    const [isNewCard, setNewCard] = useState(false);
    const [isDeleteList, setDeleteList] = useState(false);

    const [titleList, setTitleList] = useState(list.title);
    const [titleCard, setTitleCard] = useState('');
    const [color, setColor] = useState('');

    useEffect(() => {
        colors.length > 0 && setColor(colors[0].color);
    }, [colors])

    async function addNewCard() {
        const description = '';

        const newCard = await api.post('cards', {
            listId: list.id,
            title: titleCard,
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

    async function deleteList() {
        await api.delete(`lists/${list.id}`);

        const newListCards = await listCards.filter(listCard => {
            return listCard.id !== list.id;
        })

        setListCards(newListCards)
    }

    function handleBlurListTitle(e) {
        if (titleList === list.title) return;

        api.patch(`lists/${list.id}`, {
            title: titleList
        })

        const updateListCards = listCards.map(item => {
            if (item.id === list.id) {
                item.title = titleList;
                return item;
            }
            return item;
        })

        setListCards(updateListCards);
    }

    return (
        <ListWrapper>
            <header>
                <InputTitle
                    fontSize="14px"
                    defaultValue={list.title}
                    onChange={(e) => setTitleList(e.target.value)}
                    onBlur={handleBlurListTitle}
                />
            </header>
            <ListContent>
                {list.cards.map(card => {
                    return <Card key={card.id} card={card} />
                })}
            </ListContent>

            {isNewCard ?
                <NewCard
                    tabIndex="0"
                    onBlur={(e) => { if (!e.nativeEvent.relatedTarget) setNewCard(false) }}
                    onKeyPress={(e) => e.charCode === 13 && document.querySelector('button').click()}
                >
                    <Input
                        placeholder="Insira um título para este cartão..."
                        onChange={(e) => setTitleCard(e.target.value)}
                    />
                    <footer>
                        <LabelColor color={color} changeColor={color => setColor(color)} />
                        <Button onClick={addNewCard} />
                        <FaTimes onClick={() => setNewCard(false)} />
                    </footer>
                </NewCard>
                :
                <footer
                    tabIndex="0"
                    onBlur={(e) => { if (!e.nativeEvent.relatedTarget) setDeleteList(false) }}
                >
                    <p onClick={() => setNewCard(true)}>+ Adicionar cartão</p>
                    {isDeleteList ?
                        <DeleteList onClick={deleteList}><FaTrashAlt /></DeleteList>
                        :
                        <DeleteList onClick={() => setDeleteList(true)}>...</DeleteList>
                    }
                </footer>
            }
        </ListWrapper>
    );
}