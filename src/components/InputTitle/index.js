import React from 'react';

import { Container, Edit, Input } from './styles';

export default function ({ ...props }) {
    return (
        <Container>
            <Edit />
            <Input {...props} className="titleList" autoComplete="off" type="text" onKeyPress={(e) => e.charCode === 13 && e.target.blur()} />
        </Container>
    );
}