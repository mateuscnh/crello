import React, { useEffect, useState } from 'react';

import BoardContext from '../context';

import { Container, BaseLogo, Card } from './styles';
import { useContext } from 'react';

export default function () {
    const { background } = useContext(BoardContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('#loading').style.opacity = 0;
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }, 1500);
    }, [])

    return (
        <>
            {loading &&
                <Container id="loading" background={background}>
                    <BaseLogo>
                        <Card time=".8s" />
                        <Card time=".6s" />
                    </BaseLogo>
                </Container>
            }
        </>
    );
}