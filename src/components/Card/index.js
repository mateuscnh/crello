import React from 'react';

import Card from './styles';

export default function (props) {
    return (
        <Card>
            <p>{props.titleCard}</p>
        </Card>
    );
}