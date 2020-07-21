import React from 'react';

import { ListWrapper, ListContent } from './styles';
import Card from '../Card';

export default function List(props) {
    return (
        <ListWrapper>
            <header><p>{props.titleList}</p></header>
            <ListContent>
                <Card titleCard="CARD CARD" />
                <Card titleCard="CARD CARD" />
                <Card titleCard="CARD CARD" />
            </ListContent>
            <footer><p>+ Adicionar outro cartão</p></footer>
        </ListWrapper>
    );
}