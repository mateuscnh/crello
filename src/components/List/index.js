import React from 'react';

import ListWrapper from './styles';

export default function List(props) {
    return (
        <ListWrapper>
            <header>
                <p>{props.title}</p>
            </header>
            <footer>
                <p>+ Adicionar outro cartão</p>
            </footer>
        </ListWrapper>
    );
}