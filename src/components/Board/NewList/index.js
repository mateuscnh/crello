import React, { useContext, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import api from '../../../services/api';
import BoardContext from '../../Board/context';

import Input from '../../Input';
import Button from '../../Button';

import { CreateNewList, Footer, AddNewList } from './styles';

export default function () {
    const { listCards, setListCards } = useContext(BoardContext);

    const [createNewList, setCreateNewList] = useState(false);
    const [title, setTitle] = useState('');

    async function addNewList() {
        try {
            const newList = await api.post('lists', {
                title
            })

            setListCards([...listCards, {
                ...newList.data,
                cards: []
            }]);

            setCreateNewList(false);
        } catch (e) {
            alert("Unexpected error");
        }
    }






    return (
        <>
            {createNewList ?
                <CreateNewList
                    tabIndex="0"
                    onBlur={(e) => { if (!e.nativeEvent.relatedTarget) setCreateNewList(false) }}
                    onKeyPress={(e) => e.charCode === 13 && document.querySelector('button').click()}
                >
                    <Input
                        placeholder="Insira um título para esta lista..."
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <Footer>
                        <Button onClick={addNewList} />
                        <FaTimes onClick={() => setCreateNewList(false)} />
                    </Footer>
                </CreateNewList>
                :
                <AddNewList onClick={() => setCreateNewList(true)}>+ Adicionar lista</AddNewList>
            }
            <h1>&nbsp;&nbsp;</h1>
        </>
    );
}