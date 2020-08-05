import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background: url(${props => props.background}) no-repeat center;
    background-size: cover;
    padding: 0 2%;

    display: flex;
    align-items: flex-start;
`