import styled, { keyframes } from 'styled-components';

const HeigthAnimate = keyframes`
    0% { height: 50%; }
    50% {height: 100%;}
    100% { height: 50%; }
`

const BlurAnimate = keyframes`
    from{filter: blur(500px);}
`

export const Container = styled.div`
    width: 100%;
    height: 100%;

    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;

    display: grid;
    place-items: center;

    background: #163C46 url(${props => props.background}) no-repeat center;
    background-size: cover;

    transition: .5s;

    animation: ${BlurAnimate} ${props => props.time} linear infinite;
`

export const BaseLogo = styled.div`
    background-color: #43777D;
    width: 50px;
    height: 50px;
    padding: 10px;
    box-shadow: 0 2px 1px 0 #163C46;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
`

export const Card = styled.div`
    background-color: #fff;
    width: 12px;
    height: 50%;
    border-radius: 4px;

    animation: ${HeigthAnimate} ${props => props.time} linear infinite;
`