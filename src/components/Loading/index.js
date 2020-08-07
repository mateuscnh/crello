import React from 'react';
import styled, { keyframes } from 'styled-components';

const HeigthAnimate = keyframes`
    0% { height: 50%; }
    50% {height: 100%;}
    100% { height: 50%; }
`

const Container = styled.div`
    width: 100%;
    height: 100%;

    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;

    display: grid;
    place-items: center;

    background-color: #111;

    transition: .5s;
`

const BaseLogo = styled.div`
    background-color: #007FC8;
    width: 60px;
    height: 60px;
    padding: 10px;

    border-radius: 10px;

    display: flex;
    justify-content: space-between;
`

const Card = styled.div`
    background-color: #fff;
    width: 16px;
    height: 50%;
    border-radius: 4px;

    animation: ${HeigthAnimate} ${props => props.time} linear infinite;
`

export default function () {
    return (
        <Container id="loading">
            <BaseLogo>
                <Card time=".8s" />
                <Card time=".6s" />
            </BaseLogo>
        </Container>
    );
}