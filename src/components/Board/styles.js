import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background: url(${props => props.background}) no-repeat center;
    background-size: cover;

    display: flex;
    align-items: start;
    justify-content: space-between;
`