import styled from 'styled-components';

export default styled.div`
    background-color: ${props => props.theme.colors.cardBackground};
    min-height: 40px;
    margin: 10px;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 0 0 #ccc;
    cursor: pointer;
    
    p{
        font-weight: 300;
    }
`