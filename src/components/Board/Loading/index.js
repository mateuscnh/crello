import React, { useEffect, useState } from 'react';

import { Container, BaseLogo, Card } from './styles';

export default function () {
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
                <Container id="loading">
                    <BaseLogo>
                        <Card time=".8s" />
                        <Card time=".6s" />
                    </BaseLogo>
                </Container>
            }
        </>
    );
}