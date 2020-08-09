import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        box-sizing: border-box; 
        font-family: 'Poppins', sans-serif;
    }

    body{
        height: 100%;
        background-color: #163C46;
    }

    ::-webkit-scrollbar {
        height: 12px;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 4px;
        background: rgba( 255, 255, 255, .4); 
    }

    ::-webkit-scrollbar-track-piece{
        margin: 1%;
    }
`