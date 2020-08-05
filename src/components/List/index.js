import React from 'react';

import { ListWrapper, ListContent } from './styles';
import Card from '../Card';

export default function List({ list }) {
    return (
        <ListWrapper>
            <header><p>{list.title}</p></header>
            <ListContent id="target">
                {list.cards.map(card => {
                    return <Card key={card.id} card={card} />
                })}
            </ListContent>
            <footer><p>+ Adicionar outro cartão</p></footer>
        </ListWrapper>
    );
}